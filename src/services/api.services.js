import axios from "axios";

const Url='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {maxResults:'50'},
    headers: {
      'X-RapidAPI-Key': "5bbd6136ddmsh75b2492e435ae1dp12034fjsnca8c9b4bd40c",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const ApiServices = {
    async fetching(url) {
        const response = await axios.get(`${Url}/${url}`,options)
        return response.data
    }
  }