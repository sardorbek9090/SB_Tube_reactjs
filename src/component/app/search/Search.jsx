import { Box, Container, Typography } from '@mui/material'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ApiServices } from '../../../services/api.services'
import { colors } from '../../../constants/colors' 
import { Videos } from '../inde'

const Search = () => {
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const getData = async()=>{
  try {
   const data=await ApiServices.fetching(`search?part=snippet&q=${id}`)
       setVideos(data.items)
  } catch (error) {
    console.log(error);
  }
    }
    getData()
  }, [id])
  
  return (
    <Box p={2} sx={{height:'90vh'}}>
      <Container maxWidth={'90%'} >
        <Typography variant={'h4'} fontWeight={'bold'} mb={2} >
          Search results for <span style={{color:colors.secondary}} >{id}</span>Videos
        </Typography>
        <Videos videos ={videos}/>
      </Container>
    </Box>
  )
}

export default Search