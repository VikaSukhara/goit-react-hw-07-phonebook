import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://651eff2b44a3a8aa47694f3c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/contactsAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contact');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// export const fetchContacts = async () => {

//   const response = await axios.get("/contacts");
//   // console.log(response)
//   // console.log("dataaaaaaaaaaaaaaaaaaaaaa")
//         console.log("dataaaaaaaaaaaaaaaaaaaaaa", response.data)

//   return response.data;
// };
