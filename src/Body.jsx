import React, { use } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Base_URL } from './utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './utils/userSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Body = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData=useSelector((store)=>store.user);
  const fetchUser=async ()=>{
    // Fetch user data from the API


    try {
          const user=await axios.get(`${Base_URL}/profile/view`, { withCredentials: true });
          dispatch(addUser(user.data));

    }
    catch (error) {
      navigate('/login');
      console.error("Error fetching user data:", error);
    }



    
  }
  useEffect(() => {
    if(!userData){
          fetchUser();

    }
  }, []);


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Body
