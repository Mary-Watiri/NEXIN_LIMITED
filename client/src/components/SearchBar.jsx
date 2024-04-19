import React from 'react'
import { Box,IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
function SearchBar({handleChange, value}) {
  return (
    <div>
       <Box class="flex">
      <input className="text-slate-200 bg-sky-950 p-3" onChange={handleChange} value={value} placeholder="SEARCH TICKETS"/>
      <IconButton  class="text-slate-700">
        <SearchOutlinedIcon />
      </IconButton>
      
    </Box>
    </div>
  )
}

export default SearchBar
