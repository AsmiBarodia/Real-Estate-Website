import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '69825f5a63msh10b80df2729100fp1ba188jsnd71894cef212'
      }
  });
    
  return data;
}


// headers: {
//   'x-rapidapi-key': '69825f5a63msh10b80df2729100fp1ba188jsnd71894cef212',
//   'x-rapidapi-host': 'bayut.p.rapidapi.com'
// }