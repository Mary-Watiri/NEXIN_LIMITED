import { UpdateTheme,UseTheme } from "./Theme";
import Bar from "./components/Charts/BarChart";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";
import { Routes, Route } from "react-router-dom"
// import Pie from "./components/Charts/PieChart";
// import Line from "./components/Charts/Line";
import FAQ from "./components/FAQ";
import Form from './components/Form';
import TeamTable from './components/TeamTable';
import ContactInformation from "./components/ContactInformation";
import Dashboard from "./components/Dashboard";
import MyCalendar from "./components/Calendar";
import Item from "./components/Item";
import house from "./assets/house.jpeg";
function App () {
  const darkTheme=UseTheme() //usetheme hook
  const toggleColor=UpdateTheme() //button hook
  //create the themes
  const ThemeStyles={
    backgroundColor:darkTheme?"rgb(46, 45, 45)":"rgb(171, 163, 159)",
    color:darkTheme?"rgb(240,240,240)":"rgb(26 46 5)",
    backgroundImage:`src='house`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  
  return (

    <div className="app overflow-hidden" style={ThemeStyles}>
      <SideBar/>
    <main className="content">
      <TopNav toggleColor={toggleColor} darkTheme={darkTheme}/> 
      {/* Routes */}
      <Routes>
        <Route path="/Bar" element={<Bar ThemeStyles={ThemeStyles}/>}/>
        {/* <Route path="/Pie" element={<Pie/>}/>
        <Route path="/Line" element={<Line/>}/> */}
        <Route path="/FAQ" element={<FAQ ThemeStyles={ThemeStyles}/>}/>
        <Route path="/admin" element={<TeamTable/>}/>
        <Route path="/Profile" element={<Form ThemeStyles={ThemeStyles} />}/>
        <Route path="/" element={<Dashboard ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Calendar" element={<MyCalendar/>}/>
        <Route path="/Item" element={<Item ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Profile" element={<Form />}/>
        <Route path="/Contacts" element={<ContactInformation ThemeStyles={ThemeStyles} />}/>
      </Routes> 
      </main>
     
     </div>

  
  )
}

export default App;