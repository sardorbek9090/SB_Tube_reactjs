import { Stack } from '@mui/material'
import React from 'react'
import { category } from '../../../constants'
import {colors} from '../../../constants/colors'

function Category({categoryHandler,selectedcategory}) {
  return (
    <Stack direction={'row'} sx={{overflowX:'scroll'}} >
        {category.map(item=>(
            <button key={item.name} className="category-btn" style={{background:item.name === selectedcategory && colors.secondary,color:item.name === selectedcategory && '#fff'}} onClick={()=>categoryHandler(item.name)}  >
                <span style={{color: item.name === selectedcategory ? '#fff' : colors.secondary ,marginRight:'15px'}}>{item.icon}</span>
                <span>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category