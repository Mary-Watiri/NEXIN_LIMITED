import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Box, IconButton, Button } from '@mui/material';
import Bar from './Charts/BarChart';
import ticketsImage from '../assets/tickets.png';
import { Link } from 'react-router-dom';
// import House from '../../public/House.jpeg';
const Dashboard = ({ThemeStyles}) => {
    
  return (
    <div className="p-6 overflow-hidden h-screen">
    <Box class="justify-between flex" style={ThemeStyles}>
      <div>
    <h1 className="text-3xl font-bold mb-4">Nexin LTD Ticketing System</h1>
      <h2 className="text-2xl font-semibold mb-8 text-white-600">WELCOME TO THE DASHBOARD</h2>
     </div>
       </Box>
        
      
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-2">
        {/* Email sent*/}
        <Box className="bg-amber-950 p-2  shadow-md flex items-center">
          <div className="w-4 h-8 text-blue-500 mr-2"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl text-slate-300 font-semibold">61</h1>
            <h2 className='text-blue-500'>All Tasks</h2>
          </div>
        </Box>
        
        
        <div className="bg-amber-950 p-4  shadow-md flex items-center">
          <div className="w-8 h-8 text-green-500 mr-4"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-300">21</h1>
            <h2 className='text-green-500'>Open Tasks</h2>
          </div>
        </div>

        
        <div className="bg-amber-950 p-4  shadow-md flex items-center">
          <div className="w-8 h-8 text-yellow-500 mr-4"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-300">441</h1>
            <h2 className="text-yellow-500">Closed Tasks</h2>
          </div>
        </div>

        {/* Clients Metrics */}
        <div className="bg-amber-950 p-4  shadow-md flex items-center">
          <div className="w-8 h-8 text-purple-500 mr-4"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-300">40</h1>
            <h2 className="text-purple-500">Tasks Due Today</h2>
          </div>
        </div>
      </Box>
    

      
      <Box class="flex w-100 justify-center ">
    <Box class="p-2 bg-amber-950 m-3 w-4/4 h-60 overflow-hidden">
    <div className="flex  justify-between text-center"> 
    <div className="bg-amber-950 p-4  shadow-md flex items-center">
    <img src={ticketsImage} alt="Recent Tickets" className="mr-4" style={{ width: '200px', height: 'auto' }} />          
    <div className="w-8 h-8 text-yellow-500 mr-4"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-300">61</h1>
            <h2 className="text-yellow-500">Recent Tickets</h2>
            <h3 className="text-green-500">Nexin LTD's ticketing system currently has a total of 61 tickets. 
            Out of these, 21 tasks are still open and awaiting resolution. 
            A significant portion, 41 tasks, are due today, indicating a busy schedule for the team to address these urgent matters promptly. 
            This summary highlights the workload and the importance of efficient task management to meet today's deadlines. </h3>
          </div>
        </div>
  <Link to="/Item">
<IconButton class="text-emerald-500">


</IconButton> 
  </Link>  

</div>
        
    </Box>
</Box> 


      {/* Campaign */}
      <Box class="flex justify-between overflow-hidden">
 <Box className="w-full p-3 bg-amber-950">
        <h1 className="text-green-500 text-2xl font-semibold mb-2">Closed Tickets</h1>
        <div className="p-4 rounded-lg shadow-md">
          <DonutLargeIcon className="w-75 h-72 text-4xl text-blue-500 mb-2" />
          <h2 className='text-blue-100 text-xl'>Closed tickets for the year</h2>
          <h3  className='text-blue-500'>Closing 441 tickets is a testament to our team's dedication and effectiveness. Continuing to leverage insights from these resolved issues will be crucial in maintaining high levels of customer satisfaction and operational excellence. Moving forward, sustaining this momentum will require ongoing commitment to service quality, process optimization, and proactive customer engagement.</h3>
        </div>
      </Box>

      {/* Sales Quantity */}
      <Box className="ml-3 h-fit p-3  w-full bg-amber-950">
        <h1 className="text-xl text-center font-semibold">Tasks Chart</h1>
       <div className="w-75 h-72 -mt-8"><Bar/></div> 
      </Box>

      </Box>
     
    </div>
    
  );
}


export default Dashboard;