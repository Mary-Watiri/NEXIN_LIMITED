import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Box, IconButton, Button } from '@mui/material';
import Bar from './Charts/BarChart';
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
            <h1 className="text-2xl text-slate-300 font-semibold">12,361</h1>
            <h2 className='text-blue-500'>All Tasks</h2>
          </div>
        </Box>
        
        
        <div className="bg-amber-950 p-4  shadow-md flex items-center">
          <div className="w-8 h-8 text-green-500 mr-4"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-300">431,22</h1>
            <h2 className='text-green-500'>Open Tasks</h2>
          </div>
        </div>

        
        <div className="bg-amber-950 p-4  shadow-md flex items-center">
          <div className="w-8 h-8 text-yellow-500 mr-4"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-300">32,441</h1>
            <h2 className="text-yellow-500">Closed Tasks</h2>
          </div>
        </div>

        {/* Clients Metrics */}
        <div className="bg-amber-950 p-4  shadow-md flex items-center">
          <div className="w-8 h-8 text-purple-500 mr-4"><DonutLargeIcon /></div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-300">30,440</h1>
            <h2 className="text-purple-500">Tasks Due Today</h2>
          </div>
        </div>
      </Box>
    

      {/* Recent Transactions */}
      <Box class="flex w-100 justify-between">
    <Box class="p-2 bg-amber-950 m-3 w-3/4 h-60 overflow-hidden">
    <div className="flex  justify-between text-center"> 
  <Link to="/Line">
<IconButton class="text-emerald-500">


</IconButton> 
  </Link>  

</div>
        
    </Box>
    <Box class="p-5 mr-2 overflow-y-scroll h-60 w-1/3 position-fixed scroll-">
        <div className="bg-amber-950 text-center justify-center flex h-12 align-middle">
        <h2 class="text-slate-100 p-3  w-100">
            Recent Transactions
        </h2>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-amber-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">Simon</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">37009103</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-amber-950 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-amber-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">Charity</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">39764784</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-amber-950 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-amber-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">Abaadir</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-amber-950 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-amber-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">Mwangi</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-amber-950 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-amber-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">Wanjiku</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-amber-950 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-amber-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">Kimwaki</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-amber-950 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle justify-between p-4 w-100 bg-amber-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">Muteithia</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-amber-950 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
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
          <h3  className='text-blue-500'>Closing 32,441 tickets is a testament to our team's dedication and effectiveness. Continuing to leverage insights from these resolved issues will be crucial in maintaining high levels of customer satisfaction and operational excellence. Moving forward, sustaining this momentum will require ongoing commitment to service quality, process optimization, and proactive customer engagement.</h3>
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