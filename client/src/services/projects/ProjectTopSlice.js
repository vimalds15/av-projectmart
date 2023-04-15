import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    projects:[],
    loading:null,
    error:null,
}

const ProjectTopSlice = createSlice({
  name: "projectTop",
  initialState,
  reducers: {
    setProjects:(state,action)=>{
        state.projects=action.payload
      },
      setLoading:(state,action) => {
        state.loading = action.payload
      },
      setError:(state,action) => {
        state.error= action.payload
      }
  }
});

export const {setProjects,setError,setLoading} = ProjectTopSlice.actions

export default ProjectTopSlice.reducer

export const getTopProjects = () => async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const {data} = await axios.get(`/api/projects/top`)
      dispatch(setProjects(data))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      const payload = error.response && error.response.data.message ?error.response.data.message:error.message
      dispatch(setError(payload))
    }
  }