import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const Item = ({ThemeStyles}) => {
  const [tickets, settickets] = useState([]);
  const [input, setInput]=useState("")
  const [newItem, setNewItem] = useState({
    ticket: '',
    price: '',
    quantity: '',
    stock_in: '',
    stock_out: '',
    avatar: '',
    
  });
  //search functionality
  const FilteredItems=tickets.filter(item=>{
    const ItemFilter=input===""||item.ticket.toUpperCase().startsWith(input.toUpperCase()) //filter by case insenstive
    return ItemFilter
  })
  
//fetch
  useEffect(() => {
    fetch(`http://localhost:7000/tickets`)
      .then(response => response.json())
      .then(data => {
        settickets(data);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
      });
  }, []);
  const handleSearchChange=(e)=>{
     setInput(e.target.value)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
    
  };
  

  
// //submit functionality
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newItemWithAvatar = { ...newItem };
//     settickets([...tickets, newItemWithAvatar]);
//     setNewItem({
//       ticket: '',
//       price: '',
//       quantity: '',
//       stock_in: '',
//       stock_out: '',
//       avatar: ''
//     });
//   };

  return (
    <div style={ThemeStyles} className="container mx-auto px-4 py-6">
     <h1 className="text-3xl font-semibold mb-4">Tickets</h1>
      <div className='text-center mx-auto'><SearchBar handleChange={handleSearchChange} value={input}/></div>
      <table style={ThemeStyles} className="w-full border-collapse border-orange-700 h-3/4">
        <thead>
          <tr className="bg-orange-970 border-orange-700">
           
            <th className="text-2xl font-medium py-2 text-slate-200 px-4 border border-orange-700">Ticket ID</th>
            <th className="text-2xl font-medium py-2 text-slate-200 px-4 border border-orange-700">Client ID</th>
            <th className="text-2xl font-medium py-2 text-slate-200 px-4 border border-orange-700">Assign to</th>
            <th className="text-2xl font-medium py-2 text-slate-200 px-4 border border-orange-700">Priority</th>
            <th className="text-2xl font-medium py-2 text-slate-200 px-4 border border-orange-700">Status</th>
            <th className="text-2xl font-medium py-2 text-slate-200 px-4 border border-orange-700">Deadline</th>
            <th className="text-2xl font-medium py-2 text-slate-200 px-4 border border-orange-700">Comments</th>
          </tr>
        </thead>
        <tbody>
          {FilteredItems.map((item, index) => (
            <tr key={index} className="hover:bg-cyan-400">
              <td className="text-2xl font-medium py-2 px-4 border border-orange-700">{item.id}</td>
              <td className="text-2xl font-medium py-2 px-4 border border-orange-700">{item.client_id}</td>
              <td className="text-2xl font-medium py-2 px-4 border border-orange-700">
              {item.assign_to}
              <button type="submit" className="bg-blue-700 text-orange px-4 text-2xl font-medium py-2 rounded">Assign</button>
              </td>
              <td className="text-2xl font-medium py-2 px-4 border border-orange-700">{item.priority}</td>
              <td className="text-2xl font-medium py-2 px-4 border border-orange-700">{item.status}</td>
              <td className="text-2xl font-medium py-2 px-4 border border-orange-700">{item.deadline}</td>
              <td className="text-2xl font-medium py-2 px-4 border border-orange-700">{item.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add new item */}
      {/* <form onSubmit={handleSubmit} style={ThemeStyles} className="mt-4 flex">
        <input type="text" name="ticket" placeholder="ticket" value={newItem.ticket} onChange={handleInputChange} className="px-4 text-2xl font-medium py-2 bg-slate-200 text-black border border-orange-200 rounded mr-2" />
        <input type="number" name="price" placeholder="Price" value={newItem.price} onChange={handleInputChange} className="px-4 text-2xl font-medium py-2 border bg-slate-200 text-black border-orange-200 rounded mr-2" />
        <input type="number" name="quantity" placeholder="Quantity" value={newItem.quantity} onChange={handleInputChange} className="px-4 bg-slate-200 text-2xl font-medium py-2 text-black border border-orange-200 rounded mr-2" />
        <input type="number" name="stock_in" placeholder="Stock In" value={newItem.stock_in} onChange={handleInputChange} className="px-4 bg-slate-200 text-2xl font-medium py-2 text-black border border-orange-200 rounded mr-2" />
        <input type="number" name="stock_out" placeholder="Stock Out" value={newItem.stock_out} onChange={handleInputChange} className="px-4 bg-slate-200 text-2xl font-medium py-2 text-black border border-orange-200 rounded mr-2" /> */}
        {/* <button type="submit" className="bg-blue-700 text-orange px-4 text-2xl font-medium py-2 rounded">Add Item</button>
      </form> */}
    </div>
  );
};

export default Item;

