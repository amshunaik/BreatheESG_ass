
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom'
import './Welcome.css'
const Welcome = (props) => {
  var halt
  useEffect(() => {
  
      const handleBeforeUnload = (e) => {
        // Cancel the event to prevent the browser from refreshing
        e.preventDefault();
        // Chrome requires returnValue to be set
        e.returnValue = '';
      };
  
      // Add event listener for beforeunload event
      window.addEventListener('beforeunload', handleBeforeUnload);
  
    // Remove the last entry from the browser's history
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);

    // Cleanup function to remove event listener when component unmounts
    
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);

      window.removeEventListener('beforeunload', handleBeforeUnload);
      console.log(props.OnUser)
    };
    
  }, []);

  const onBackButtonEvent = (e) => {
    // Prevent the default behavior of the back button
    e.preventDefault();
    
    // Manipulate the browser's history stack to prevent navigation
    window.history.forward();
  };

  const firstLetter=props.OnUser.charAt(0);

  const navigate=useNavigate();
  
  localStorage.removeItem(props.onLogout)
  const handlelogout=()=>{
    localStorage.removeItem(props.OnUser)
    props.onLogout('')
    navigate("/login");

    console.log("Loged out")

  }
  const hindleSignup=()=>{
    //props.onLogout('')
    navigate("/")
  }
  return (
    <div className='cont'>
        <div className='navbar'>
              <div className='Inc'> 
                
                  <img className='logo_icon'src="ESG3.png" alt="" />
                  <span className='logo_name'>BREATHE ESG</span>
              </div>
              <div className='buttons'>
                  <button className="bt1" onClick={handlelogout}>Logout</button>
                  <button className="bt1" onClick={hindleSignup}>SignUp</button>
                  
                  <div className="div1">
                  <p className='p1'>Welcome Me </p>
                 
                  </div>
           
              </div>
    
           
        </div>
        <div className='content'>
        <iframe src="https://www.breatheesg.com/" width="100%" height="850px" frameborder="0"></iframe>

        </div>

      </div>

        
  )
}

export default Welcome
