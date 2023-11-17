import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Student {
  id: number,
  surName: string,          
  name: string,             
  patronymic: string,       
  bthDay: string,           
  homeaddres: string,       
  liveaddres: string,       
  admissionYear: string,    
  studyType: string,        
  faculty: string,          
  speciality: string,       
  group: string,            
  numberRecordBook: string, 
  dateDeduction: string,    
  reasonDeduction: string
}

const API_ENDPOINT = "http://localhost:4200";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const response = await axios.get<Student[]>(`${API_ENDPOINT}/api/students`);
  return response.data;
});

export const fetchGameById = createAsyncThunk("api/fetchGameById", async (gameId) => {
  const response = await axios.get<Student>(`${API_ENDPOINT}/api/students/${gameId}`);
  return response.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: [] as Array<Student>,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Student[]>) => {
      return action.payload;
    });
    builder.addCase(fetchGameById.fulfilled, (state, action: PayloadAction<Student>) => {
      return [action.payload];
    });
  },
});


export default apiSlice.reducer;