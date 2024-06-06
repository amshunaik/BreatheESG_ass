import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const SignUp = () => {

    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');

    const [status, setStatus] = useState(null);
    const [confpw,setconfpw]=useState('')
    
    const navigate=useNavigate();
    const [erremail,seterremail]=useState('');
    const [present,setpresent]=useState('');
    const [errpw,seterrpw]=useState('')
    const [errconfpw,seterrconfpw]=useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
    
        const apiKey = "AIzaSyAEYiiS-_SOh6Deim_Sq0FZUTPpLTDU8SI";
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
        const url2="https://breathe-esg-d5528-default-rtdb.firebaseio.com/UserData.json"
    
        const payload = {
          email,
          password,
          returnSecureToken: true
        };
    
        try {
            if(!email|| !email.includes("@")){
                seterremail("Enter valid Email ID");
                return;
            }
            if(!password|| password.length<=6){
                seterrpw("Enter vaid password of length greater than 6");
                return;

            }
            if(confpw!=password){
              seterrconfpw("Enter correct password");
              return;
            }
            
            if(email.includes("@")){
              seterremail("")
            }
            if(password.length>6){
              seterrpw("");
            }
            if(password===confpw){
              seterrconfpw("");
            }
          
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
          
    
          if (!response.ok) {
            const errorData = await response.json();
            setpresent("Email Exists! Login through ID")
            //window.alert("email exits")
            throw new Error(errorData.error.message);
          }
          console.log("status : ",present)
    
          const data = await response.json();
          
          if(present==''){
            const res2 = await fetch(url2, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload),
              
              
            });
            window.alert("hnnmmm")
          }
          console.log("User signed up successfully:", data);
          setpresent('');
          setStatus('User signed up successfully!');
          
          // You can navigate or perform other actions here
        } catch (error) {
          console.error("Error signing up:", error.message);
          setStatus('Error signing up: ' + error.message);
        }
      };
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
            
            <h1 className='signup'>Sign Up</h1>
            <p className='error1'>{present}</p>
            <div className='part1'>
                <label htmlFor="" className='tag'>Email : </label>
                <input type="text" className='tagbox'  value={email} onChange={(e)=>setemail(e.target.value)}placeholder='Your Email ID' required/>
                <p className='error'>{erremail}</p>
            </div>
            <div  className='part1'>
                <label htmlFor="" className='tag'>Password :</label>
                <input type="text" className='tagbox'  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' required/>  
                <p className='error'>{errpw}</p>              
            </div>
            <div  className='part1'>
                <label htmlFor="" className='tag'>confirm Password :</label>
                <input type="text" className='tagbox'  value={confpw} onChange={(e)=>setconfpw(e.target.value)} placeholder='Password' required/>  
                <p className='error'>{errconfpw}</p>              
            </div>
            <p>Account exists ? <NavLink to="/login" className='login'>Login</NavLink></p>

            <button className='signupbox' onClick={handleSubmit}> Continue </button>
      
    </div>

        </div>
        

      
    </div>
  )
}

export default SignUp
