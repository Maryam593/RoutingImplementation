import axios from "axios";

//axios is a library 

const instanceAxious= axios.create({
    //fakestore is use to like have dumy api!/fake Apis
    // baseURL: 'https://some-domain.com/api/',
    baseURL : 'https://fakestoreapi.com',
    timeout: 2000,
   // headers: {'X-Custom-Header': 'foobar'}
  });

export default instanceAxious;