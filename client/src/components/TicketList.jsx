import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const TicketList = ({ ThemeStyles }) => {
  const [tickets, setTickets] = useState([]);
  const [input, setInput] = useState("");
  const [newTicket, setNewTicket] = useState({
    ticketId: '',
    clientId: '',
    assignTo: '', 
    priority: '',
    status: '',
    deadline: '',
    comments: ''
  });

  // Array of admin options for the dropdown
  const adminOptions = ['Admin 1', 'Admin 2', 'Admin 3']; // Add your admin names here

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = () => {
    fetch('http://127.0.0.1:5000/tickets')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        return response.json();
      })
      .then(data => {
        setTickets(data);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
      });
  };

  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Convert the date to SQLite-supported format if it's the deadline field
    const convertedValue = name === 'deadline' ? new Date(value).toISOString() : value;
    setNewTicket({ ...newTicket, [name]: convertedValue });
  };

  const validateTicketData = () => {
    // Add validation logic here
    // For example, check if required fields are filled
    return true; // Return true if validation passes, false otherwise
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateTicketData()) {
      // Display error message to user if validation fails (optional)
      return;
    }
  
    const deadlineDate = newTicket.deadline ? new Date(newTicket.deadline) : null;
  
    const defaultTicket = {
      ...newTicket,
      deadline: deadlineDate || new Date(), // Set default value to current date if deadline is not provided
    };
  
    fetch('http://127.0.0.1:5000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(defaultTicket),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create ticket');
      }
      console.log('New ticket created successfully');
      // Fetch updated tickets after creating a new one
      fetchTickets().then(() => {
        // Clear form fields
        setNewTicket({
          ticketId: '',
          clientId: '',
          assignTo: '',
          priority: '',
          deadline: '',
          comments: '',
        });
      });
    })
    .catch(error => {
      console.error('Error creating ticket:', error);
    });
  };
  
  const handleAssignTo = (ticketId, adminName) => {
    fetch(`http://127.0.0.1:5000/tickets/${ticketId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assign_to: adminName,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to assign ticket');
        }
        console.log(`Ticket ${ticketId} assigned to admin ${adminName}`);
        fetchTickets();
      })
      .catch(error => {
        console.error('Error assigning ticket:', error);
      });
  };

  const handleDeleteTicket = (ticketId) => {
    fetch(`http://127.0.0.1:5000/tickets/${ticketId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete ticket');
      }
      console.log(`Ticket ${ticketId} deleted successfully`);
      // Update tickets state by filtering out the deleted ticket
      setTickets(tickets.filter(ticket => ticket.id !== ticketId));
    })
    .catch(error => {
      console.error('Error deleting ticket:', error);
    });
  };
  
  const toggleTicketStatus = (ticketId, status) => {
    const newStatus = status === 'open' ? 'closed' : 'open';
    fetch(`http://127.0.0.1:5000/tickets/${ticketId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to ${newStatus} ticket`);
        }
        console.log(`Ticket ${ticketId} ${newStatus} successfully`);
        fetchTickets();
      })
      .catch(error => {
        console.error(`Error ${newStatus} ticket:`, error);
      });
  };
  
  const filteredTickets = tickets.filter(ticket =>
    input === "" || ticket.id.toUpperCase().startsWith(input.toUpperCase())
  );

  return (
    <div style={ThemeStyles} className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold mb-4">Tickets</h1>
      <div className='text-center mx-auto'><SearchBar handleChange={handleSearchChange} value={input} /></div>
      <table style={ThemeStyles} className="w-full border-collapse border-gray-500 h-3/4">
        <thead>
          <tr className="bg-sky-950 border-gray-500">
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Ticket ID</th>
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Client ID</th>
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Assign to</th>
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Priority</th>
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Status</th>
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Deadline</th>
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Comments</th>
            <th className="py-2 text-slate-200 px-4 border border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket, index) => (
            <tr key={index} className="hover:bg-cyan-400">
              <td className="py-2 px-4 border border-gray-500">{ticket.id}</td>
              <td className="py-2 px-4 border border-gray-500">{ticket.clientId}</td>
              <td className="py-2 px-4 border border-gray-500">
                <select
                  value={ticket.assignTo}
                  onChange={(e) => handleAssignTo(ticket.id, e.target.value)}
                  name="assignTo"
                  className="px-4 bg-slate-200 py-2 text-black border border-gray-200 rounded mr-2"
                >
                  <option value="">Select Admin</option>
                  {adminOptions.map((admin, index) => (
                    <option key={index} value={admin}>{admin}</option>
                  ))}
                </select>
              </td>
              <td className="py-2 px-4 border border-gray-500">{ticket.priority}</td>
              <td className="py-2 px-4 border border-gray-500">
                <select
                  value={ticket.status}
                  onChange={() => toggleTicketStatus(ticket.id, ticket.status)}
                  name="status"
                  className="px-4 bg-slate-200 py-2 text-black border border-gray-200 rounded mr-2"
                >
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </td>
              <td className="py-2 px-4 border border-gray-500">{ticket.deadline}</td>
              <td className="py-2 px-4 border border-gray-500">{ticket.comments}</td>
              <td className="py-2 px-4 border border-gray-500">
                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteTicket(ticket.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add new ticket */}
      <form onSubmit={handleSubmit} style={ThemeStyles} className="mt-4 flex">
        {/* Input fields for ticket properties */}
        <input type="text" name="ticketId" placeholder="Ticket ID" value={newTicket.ticketId} onChange={handleInputChange} className="px-4 py-2 bg-slate-200 text-black border border-gray-200 rounded mr-2" />
        <input type="text" name="clientId" placeholder="Client ID" value={newTicket.clientId} onChange={handleInputChange} className="px-4 py-2 border bg-slate-200 text-black border-gray-200 rounded mr-2" />
        <select
          name="assignTo"
          value={newTicket.assignTo}
          onChange={handleInputChange}
          className="px-4 bg-slate-200 py-2 text-black border border-gray-200 rounded mr-2"
        >
          <option value="">Select Admin</option>
          {adminOptions.map((admin, index) => (
            <option key={index} value={admin}>{admin}</option>
          ))}
        </select>
        <input type="text" name="priority" placeholder="Priority" value={newTicket.priority} onChange={handleInputChange} className="px-4 bg-slate-200 py-2 text-black border border-gray-200 rounded mr-2" />
        {/* Remove status input field */}
        <input type="datetime-local" name="deadline" placeholder="Deadline" value={newTicket.deadline} onChange={handleInputChange} className="px-4 bg-slate-200 py-2 text-black border border-gray-200 rounded mr-2" />
        <input type="text" name="comments" placeholder="Comments" value={newTicket.comments} onChange={handleInputChange} className="px-4 bg-slate-200 py-2 text-black border border-gray-200 rounded mr-2" />
        {/* Button to submit the form */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Ticket</button>
      </form>
    </div>
  );
};

export default TicketList;
