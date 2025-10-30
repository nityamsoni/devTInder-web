import React, { useState } from 'react';
import {BrowserRouter ,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
import { Provider } from 'react-redux';
import Feed from './Feed.jsx';
import appStore from './utils/appStore.js';

function App() {

  return (
    <>

    <Provider store={appStore}>
      <BrowserRouter basename='/'>
      <Routes>
          {/* <Route path='/' element={<h1 className="text-3xl font-bold underline"> <Navbar /> </h1>} />

        <Route path='/login' element={<h1 className="text-3xl font-bold underline">
           <Navbar />
          Login page</h1>} />
         <Route path='/test' element={<h1 className="text-3xl font-bold underline">
           <Navbar />
          Test page</h1>} /> */}
          <Route path='/' element={<Body />} >
           <Route path='/feed' element={<Feed />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />

          </Route>

      </Routes>

      </BrowserRouter>
    </Provider>
      {/**/}
 
    </>
  )
}

export default App
