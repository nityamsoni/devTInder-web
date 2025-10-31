import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Base_URL } from './utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {removeUser} from './utils/userSlice';

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log("Navbar user:", user);
 const navigate=useNavigate();
 const dispatch=useDispatch();

  const handleLogout = async () => {
    try{
      // Perform logout logic here
        await axios.post(`${Base_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      navigate('/login');


    }
    catch(error){
      console.error("Logout failed:", error);
    }
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to="/Feed">💻👩‍❤️‍💋‍👨 DevTinder</Link>
  </div>
  <div className="flex gap-2">
    {user ? (
      <div className="dropdown dropdown-end mx-20">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src={
              user?.photo || user?.avatar || user?.profileImage || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
            }
          />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link className="justify-between" to="/profile">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}> Logout</a></li>
      </ul>
    </div> ) : null }
  </div>
</div>
  )
}

export default Navbar;
