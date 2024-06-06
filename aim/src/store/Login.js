import React from 'react'
import './Login.css'
import { app} from './firebase';
import { redirect, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getDatabase, ref, get } from "firebase/database";

//import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import GitHubLogin from 'react-github-login';
import { useGoogleLogin } from '@react-oauth/google';


const Login = ({onClick}) => {
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

  // Cleanup function to remove event listener when component unmount
  
  return () => {
    window.removeEventListener('popstate', onBackButtonEvent);

    
  };
  
}, []);
const onBackButtonEvent = (e) => {
  // Prevent the default behavior of the back button
  e.preventDefault();
  
  // Manipulate the browser's history stack to prevent navigation
  window.history.forward();
};

    
    const nav=useNavigate();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
   // const [currentuser,setcurrentuser]=useState('');
    const [errpw,seterrpw]=useState('')

    const login = useGoogleLogin({
      onSuccess: async(tokenResponse) => {
        var t=tokenResponse.access_token;
        console.log(t);
        const profileResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                  Authorization: `Bearer ${t}`,
                },
              });
        
              if (!profileResponse.ok) {
                throw new Error('Failed to fetch user profile information from Google.');
              }
        
              // Parse the response JSON
              const profileData = await profileResponse.json();
              
              // Extract email address from the profile data
              const userEmail = profileData.email;
              
              console.log('User Email:', userEmail);
              
                const loggedInUserEmail = localStorage.getItem(userEmail);
                if (loggedInUserEmail) {
                  const confirmed = window.confirm("You are already logged in. Do you want to continue?");
  
                  if (!confirmed) {
                    // If user clicks cancel, set error message and prevent navigation
                    seterrpw("Already logged in");
                    return;
                  } else {
                    // If user clicks continue, navigate to the next page
                     onClick(userEmail);
                     localStorage.setItem(userEmail,"google"); 
                     nav("/welcome");
                    //nav("/welcome");
                  }
                }
             
            }
      
    });

      const gitlog=async(response)=>{
 
        
        nav("/welcome")
      }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const database = getDatabase(app);

        const dbRef = ref(database, 'UserData'); // Adjust the path as needed
  
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          let f=0;
          const data = snapshot.val();
          Object.keys(data).forEach(key => {
            const value = data[key];
            console.log(value.email);
            if(value.email===email){
                f=1;
                if(value.password===password){
                  
                    seterrpw('')
                    onClick(email);
                    if (localStorage.getItem(email) !== null) {
                      // Display a confirmation alert
                      const confirmed = window.confirm("You are already logged in. Do you want to continue?");
                      
                      if (!confirmed) {
                        // If user clicks cancel, set error message and prevent navigation
                        seterrpw("Already logged in");
                        return;
                      } else {
                        // If user clicks continue, navigate to the next page
                        nav("/welcome");
                      }
                    }
                    localStorage.setItem(email,password);
                    nav("/welcome");
                }
                else{
                    seterrpw("Incorrect password");
                    return;
                }
            }
        });
       
          if(f===0){
            seterrpw("Account not exists through this ID, SignUp");
            return;
          }
         
        }
       
    }
    
  return (
    <div className='main'>
        <div className='side1'>
            <p className='p1'>WELCOME TO</p>
          
           <div className="logo">
           <img className='logo_icon'src="ESG3.png" alt="" />
            <span className='logo_name'>BREATHE ESG</span>
           </div>
          
       
            <p className='p2'>We help you track your organisations <br></br>metrics as per the ESG Guidelines</p>

            <p className='p3'>Sounds Interesting? <span className='p4'>Get in touch!</span> </p>
        </div>
        <div className='side2'>
            <img className='side2_img'src="ESG2.png" alt="" />
        <div className='s2'>
            
            <h1 className='signup'>Login</h1>
            <p className='error'>{errpw}</p>
            <p className='detail1'>Enter your registered Email ID to continue</p>
            <div className='part1'>
                <label htmlFor="" className='tag' >Email : </label>
                <input type="text" className='tagbox'value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Your Email ID' />
            </div>
            <div  className='part1' id='part1'>
            <label htmlFor="" className='tag'>Password :</label>
                <input type="text" className='tagbox'value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
                
            </div>
            <button onClick={() => login()} className='option2'>
                <img src="google.png" alt="" className='op2' />
                <p className='op1' >Sign up with Google </p> 
            </button>
            <GitHubLogin clientId="Ov23liQSsPuaKG2ldoOo"
            onSuccess={gitlog}
            
           
            className="option2"
            valid={true}
            redirectUri="http://localhost:3000"
          >

        <img src="github.png" alt="GitHub" className="op2" />
        <span className="op1">Sign up with GitHub</span>
    
    </GitHubLogin>

            <p className='detail2'>Account not exists ? <NavLink className='sign'to="/">SignUp</NavLink></p>
            <p className='detail2'>Having trouble loging in? <a className='d2' href='/' >Contact us</a></p>


            <button className='signupbox' onClick={handleSubmit}> Continue </button>
      
    </div>

        </div>
        

      
    </div>
  )
}

export default Login
