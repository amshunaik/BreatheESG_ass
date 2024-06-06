// import First from "./Core/first";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";

// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// function App() {
//   const router=createBrowserRouter([
//     {path:'/',element:<First/>},
//     {path:'/about',element:<About/>},
//     {path:'/contact',element:<Contact/>}
//   ])


//   return (
//     <div>
//       <RouterProvider router={router}/>



//     </div>

//   );
// }
// export default App;



// ApI code is below mentioned for movie: uncoment it and run it
// }
// export default App;
// import Experience from "./components/Movies/Experience";
// function App(){
//   return(
//     <Experience/>

//   )

// }
// export default App;
// import Todo from './components1/Actions/todo'
// function App() {
//   return (
//     <div>


//       <Todo/>



//     </div>

//   );
// }

//export default App;

// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import Home from './page1/Home';
// import Contact from './page1/Contact';
//  function App(){
//   const router=createBrowserRouter([{
//     path:'/',element:<Home/>
//   },
//   {path:'/contact',element:<Contact/>}])
//   return(
//     <div>
//       <RouterProvider router={router}/>

//     </div>

//   )

//  }
//  export default App;

// stack overflow ----------------------------------------------------------------

// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import Auth from './Pages/Auth/Auth';
// import Root from './Pages/Root';
// import Questions from './components/Homesidebar/Questions';
// function App(){
//   const router=createBrowserRouter([{
//     path:'/',element:<Root/>,children:[
//       {path:'/',element:<Home/>},
// {path:'/Auth',element:<Auth/>},
// {path:'/Questions',element:<Questions/>}

//     ]}
// ])
//   return (
//     <div>
//       <RouterProvider router={router}/>

//     </div>
//   )

// }
// export default App;

//------------------------------food BTP-------------------------------------------------
//  import { Fragment ,useState} from "react";
// import Header from "./foodmenu/components/Layout/Header";
// import Meals from "./foodmenu/components/Meals/Meals";
// import Cart from "./foodmenu/components/Cart/Cart";
// import CartProvider from "./foodmenu/Store/Cart-provider";
// function App(){

//     const [cartIsShown,setcartIsShown]=useState(false);

//     const showCartHandler=()=>{
//         setcartIsShown(true);
//     }
//     const HideCartHandler=()=>{
//         setcartIsShown(false);
//     }
//     return(
//         <CartProvider>
//             {cartIsShown&&<Cart onClose={HideCartHandler}/>}
//             <Header onShowCart={showCartHandler}/>
//             <main>
//                 <Meals/>
//             </main>


//         </CartProvider>
//     )

// }
// export default App;

////////////////////////////////////////////////food btp follow below ///////////////////

// import React,{Fragment,useState} from 'react'
// import Nav from './Dashboard/Nav';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Footer from './Dashboard/Footer';
// import SignUp from './Dashboard/SignUp';
// import PrivateComp from './Dashboard/PrivateComp';
// import Login from './Dashboard/Login';
// import AddProd from './Dashboard/AddProd';
// import Products from './Dashboard/Products';

// import Header from "./component/Layout/Header";

// import Meals from './component/Meals/Meals';
// import Cart from './component/Cart/Cart';
// import Cartprovide from './component/Store/cartProvide';
// import Home from './component/Home';
// import OrderHis from './Dashboard/OrderHis';
// function App() {
//   // const [cartShown,setcartShown]=useState(false);

//   // const showcartHandel=()=>{
//   //   setcartShown(true);
//   // }
//   // const hideCarthandle=()=>{
//   //   setcartShown(false)
//   // }
//   return (
//     <div className='link0'>
//          <BrowserRouter>
//          <Header/>  
        
//          <Routes>
//              <Route element={<PrivateComp/>}>
//              <Route path="/" element={<Home/>}/>   
//              <Route path="/p" element={<Products/>}/>
//              <Route path="/login" element={<Login/>}/>
//              <Route path="/add" element={<AddProd/>}/>
//              <Route path="/update" element={<h1>update Product list</h1>}/>
//              <Route path="/logout" element={<h1>Logout</h1>}/>
//              <Route path="/profile" element={<h1>Profile</h1>}/>
//              <Route path="/hist" element={<OrderHis/>}/>
            
//              </Route>
//              <Route path="/signup" element={<SignUp/>}/>
             



//          </Routes>
//          </BrowserRouter>
        
//          </div>

//   );
// }

// export default App;

//////////////////////////////////////////////////////////////////////////////////
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Nav from "./part/Nav";
// import Signup from "./part/Signup";
// import PrivateComponent from "./part/Private.component";
// import Login from "./part/Login";
// import AddProduct from "./part/AddProduct";
// import ProductList from "./part/ProductList";
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//       <Nav/>
//       <Routes>

//         <Route element={<PrivateComponent/>}>
//         <Route path="/" element={<Home/>}
//         <Route path="/p" element={<ProductList/>}/>
//         <Route path="/add" element={<AddProduct/>}/>
//         <Route path="/update" element={<h1> update product here</h1>}/>
//         <Route path="/logout" element={<h1> logout here</h1>}/>
//         <Route path="/profile" element={<h1> profile here</h1>}/>
//         </Route>

//         <Route path="/signup" element=<Signup/> />
//         <Route path="/Login" element=<Login/>/>
//       </Routes>


//       </BrowserRouter>


//     </div>
//   )

//******************************************************************************* */
// import React, { useEffect, useState } from 'react';

// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
// import MainHeader from './components/MainHeader/MainHeader';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(()=>{
//     const s=localStorage.getItem('isLoggedIn');
//     if(s==='1'){
//       setIsLoggedIn(true);
//     }
//     console.log("hjjjj")
//   },[])
//   const loginHandler = (email, password) => {
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn','1');
//     console.log("hi");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;


// import React from 'react'
// import './App.css'
// import Todolist from './To-Do/Todolist'
// import 'bootstrap/dist/css/bootstrap.min.css'
// function App() {
//   return (
//     <div>
//       <Todolist/>

//     </div>
//   )
// }

// export default App
////////////////////////////////////Backend part  node js/////////////////
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Nav from "./part/Nav";
// import Signup from "./part/Signup";
// import PrivateComponent from "./part/Private.component";
// import Login from "./part/Login";
// import AddProduct from "./part/AddProduct";
// import ProductList from "./part/ProductList";
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//       <Nav/>
//       <Routes>

//         <Route element={<PrivateComponent/>}>
//         <Route path="/" element={<ProductList/>}/>
//         <Route path="/add" element={<AddProduct/>}/>
//         <Route path="/update" element={<h1> update product here</h1>}/>
//         <Route path="/logout" element={<h1> logout here</h1>}/>
//         <Route path="/profile" element={<h1> profile here</h1>}/>
//         </Route>

//         <Route path="/signup" element=<Signup/> />
//         <Route path="/Login" element=<Login/>/>
//       </Routes>


//       </BrowserRouter>


//     </div>
//   )

// }
// export default App;

////////////////////////////////////////Part ended////////////////////////
// import {createBrowserRouter ,  RouterProvider} from 'react-router-dom';
// import Home from './navig/home';
// import Kong from './navig/react';
// import Hk from './navig/hk';
// import Club from './navig/Club';
// import Parse from './navig/Parse';
// const router=createBrowserRouter([
//     {path:'/',element:<Parse/> ,children:[
//         {path:'/',element:<Home/>},
//     {path:'/kong',element:<Kong/>}

//     ]},


//     {path:'/kong',element:<Kong/>},
//     {path:'/kong/:id',element:<Club/>},
//     {path:'/hk',element:<Hk/>}

// ])
// function App(){

//     return(
//         <>
//         <h1>For you</h1>

//         <RouterProvider router={router}/>

//         </>
//     )

// }
// export default App;

////////////////////////////////////////////
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import ADragDrop from './ADragDrop';
// function App(){
//   return(
//     <DndProvider backend={HTML5Backend}>
//       <div className=''>
//         <ADragDrop/>
//       </div>


//     </DndProvider>
//   )


// }
// export default App;
/////////////////////////////////////////////////
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import User from './Todo/User';
// import CreateUser from './Todo/CreateUser';
// import UpdateUser from './Todo/UpdateUser';
// function App(){
//   const router=createBrowserRouter([
//     {path:'/',element:<User/>},
//     {path:'/create',element:<CreateUser/>},
//     {path:'/update/:id',element:<UpdateUser/>}

//   ])
//   return(
//     <>
//     <h1>dfdd</h1>
//     <RouterProvider router={router}/>

//     </>
//   )


// }
// export default App;
////////////////////////////////////////Manas codethon/////////////////////



// import React, { useState } from "react";
// import Questions from "./Manascode/Questions";
// import Start from "./Manascode/Start";
// import './App.css'

// //import Analysis from "./Manascode/Analysis";
// import Root from "./Manascode/Root/Root";
// import Quescover from "./Manascode/Quescover";
// import { codecontext } from "./Manascode/Quescover";
// import { useContext } from "react";
// import Recomend from "./Manascode/Recomend";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import Tracks from "./Manascode/Root/Tracks";
// import Home from "./Manascode/Root/Home";
// import Pass1 from "./Manascode/Root/Audiotrack/Pass1";
// import Pass2 from "./Manascode/Root/Audiotrack/Pass2";
// import Pass3 from "./Manascode/Root/Audiotrack/Pass3";
// const router=createBrowserRouter([
//   {path:'/',element:<Root/>, children:[
    
//   {path:'/',element:<Home/>},
//   {path:'/ques',element:<Questions/>},
//   {path:'/recomend',element:<Recomend/>},
//   {path:'/tracks',element:<Tracks/>},
//   {path:'/aud1',element:<Pass1/>},
//   {path:'/aud2',element:<Pass2/>},
//   {path:'/aud3',element:<Pass3/>},


  
  

// ]},


// ])
// function App(){
//   return(
//     <div className="go">
//     <RouterProvider router={router}/>
    
//     </div>
//   )

// }
// export default App;
////////////////////////////////////////////////////////

// const {start,analyse}=useContext(codecontext)
//   return(
//     <div className="body">
//     <div className="cover">
//     {
//       start==false?<Start/>:<Questions/>
//     }



//     </div>
//     </div>
//   )
/////////////////////////////////FSM website /////////////////////////////////////


// import React from 'react'
// //import Search from './Search/Search';
// import File1 from './Search/File1';
// function App(){
//   return(
//     <>
//     <File1/>
    
//     </>
//   )

// }
// export default App;
///////////////////////////////////////////////////
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Root from "./Learn/Root";
// import Home from "./Learn/Home";
// import React from "react";
// //import About from "./Learn/About";
// import Nomatch from "./Learn/Nomatch";
// import Feature from "./Learn/Feature";
// import Prod from "./Learn/Prod";
// import New from "./Learn/New";
// const Lazy=React.lazy(()=>import('./Learn/About'))

// const App=()=>{
//   const router=createBrowserRouter([
//     {path:'/',element:<Root/>,children:[
//       {path:'/',element:<Home/>},
//       {path:'/about',element:<Lazy/>},
//       {path:'*',element:<Nomatch/>},
//       {path:'prod',element:<Prod/>,children:[
//         {path:'feat',element:<Feature/> },
//         {path:'new',element:<New/>}
//       ]}
      
//     ]}
//   ])

//   return(
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }
// export default App;

/////////////////////////////////////////////
// import React from 'react'
// import Help from './Port/Help.js'
// const App = () => {
//   return (
//     <div>
//         <Help/>
        
      
//     </div>
//   )
// }

// export default App;
////////////////////////////////////////////////////////

//Dashboard///////////
// import './App.css'
// import Nav from './Dashboard/Nav';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Footer from './Dashboard/Footer';
// import SignUp from './Dashboard/SignUp';
// import PrivateComp from './Dashboard/PrivateComp';
// import Login from './Dashboard/Login';
// import AddProd from './Dashboard/AddProd';
// import Products from './Dashboard/Products';
// function App(){
//     return(
//         <div className='link0'>
//         <BrowserRouter>
//         <Nav/>  
//         <h1>Dashboard</h1>
        
//         <Routes>
//             <Route element={<PrivateComp/>}>
                
//             <Route path="/" element={<Products/>}/>
//             <Route path="/add" element={<AddProd/>}/>
//             <Route path="/update" element={<h1>update Product list</h1>}/>
//             <Route path="/logout" element={<h1>Logout</h1>}/>
//             <Route path="/profile" element={<h1>Profile</h1>}/>
//             </Route>
//             <Route path="/signup" element={<SignUp/>}/>
//             <Route path="/login" element={<Login/>}/>



//         </Routes>
//         </BrowserRouter>
//         <Footer/>
//         </div>
//     )
// }
// export default App;

////////////////////////Blog  js/////////
// import React from 'react'
// import Topblg from './Topblg/Topblg'
// import Home from './TopHome/Home'
// import Single from './TopHead/Single'
// import Write from './TopHead/Write'
// import Setting from './TopHead/Setting'
// import Login from './TopHead/Login'
// import Root from './TopHead/Root'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// const App = () => {
//   const router=createBrowserRouter([
//     {path:'/',element:<Root/>,children:[
//     {path:'/',element:<Home/>},
//     {path:'/register',element:<Setting/>},
//     {path:'/write',element:<Write/>},
//   {
//     path:'/login', element:<Login/>
//   }]}
//   ])
//   return (
//     <div>
//       <RouterProvider router={router}/>
        
//     </div>
//   )
// }

// export default App
/////////////////////////////////////////
// <Home/> 
//<Setting>
//<Topblg/>
//<Login/>

/////////////////////////////////////////////////////////Toogle////
// import Theme from './SCASS/Theme'
// import Togo from './SCASS/Togo'
// import Switch from "react-switch";
// import { createContext,useContext, useState } from 'react'
// import './SCASS/Togo.css'

// export const ThemeCont=createContext(null)
// const App = () => {
//   const [th,setth]=useState("light");

//   const toggle=()=>{
//     setth((curr)=>(curr==="light"?"dark":"light"));

//   }
//   return (
//     <ThemeCont.Provider value={{th,setth}}>
//       <div id={th}>
//       <Togo/>
//       <div className="st">
//         <label htmlFor="">{th==="light"?"Light Mode":"Dark Mode"}</label>
//       <Switch onChange={toggle} checked={th==="dark"}/>
//       </div>
      
      
      
//     </div>

//     </ThemeCont.Provider>
    
//   )
// }

// export default App
/////////////////////////////////////////////////

// import React from 'react'
// import Counter from './SCASS/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter/>
      
//     </div>
//   )
// }

// export default App
///////////////////////////////////////////////reactnportal;
// import React,{useState} from 'react'
// import Amodel from './Amodel'
// import Eric from './Eric'

// const App = () => {
//   const [isopen,setisopen]=useState(false)
//   return (
//    <Eric/>
//   )
// }

// export default App
/////////////////////////////////
// import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
// import About from './Xbc/About';
// import Home from './Xbc/Home';
// import Root from './Xbc/Root';
// import Car,{carr} from './Xbc/Car'
// import Help from './Xbc/Help';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/help', element: <Help /> },
//       {
//         path: '/car',
//         element: <Car />,
//         loader: async () => {
//           const module = await import('./Xbc/Car');
//           return { default: module.carr };
//         },
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <>
      
//       <main>
//         <RouterProvider router={router} />
//       </main>
//     </>
//   );
// }

// export default App;


// import React from 'react'
// import Login from '../src/XXX/Front/Login'
// import JobCreate from './XXX/Front/JobCreate'
// import Root from './XXX/Root'
// import JobDisp from './XXX/Front/JobDisp'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Signup from './XXX/Front/Signup'
// const App = () => {
//   const router=createBrowserRouter([
//     {path:'/', element:<Root/>, children:[
//       {path:'/',element:<JobDisp/>},
//       {path:'/login',element:<Login/>},
//       {path:'/create',element:<JobCreate/>},
//       {path:'/signup',element:<Signup/>}
//     ]}
//   ])
//   return (
//     <div>
//       <RouterProvider router={router}/>

      
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Pop from './XXX/Back/Pop';
// import Page from './XXX/Back/Page';
// const App = () => {
//   const [posts,setposts]=useState([]);
//   const [load,setload]=useState(false)
//   const [curr,setcurr]=useState(1);
//   const [tot,settot]=useState(10);

//   useEffect(()=>{
//     const fetchp=async()=>{
//       setload(true);
//       const res=await axios('https://jsonplaceholder.typicode.com/posts');
//       setposts(res.data);
//       setload(false);
//     }
//     fetchp();
//   },[]);

//   const lastp=curr*tot;
//   const firstp=lastp-tot;
//   const posttot=posts.slice(firstp,lastp);
  
//   const paginate=(pageno)=>{
    
//     setcurr(pageno);
//   }
//   console.log(posts);
//   return (

//     <div>
//       <Pop posts={posttot} load={load}/>
//       <Page pageper={tot} totpost={posts.length} paginate={paginate}/>
      
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////// Project management website
// import './App.css'
// import React, { useState } from 'react'
// import SideProj from './XProj/SideProj'
// import MainProj from './XProj/MainProj'
// import Noproj from './XProj/Noproj'
// import Selected from './XProj/Selected'
// const App = () => {
//   const [prp,setprp]=useState({
//     seletedproj:undefined,
//     project:[]
//   })
//   // When we selecting any added project
//   const handleselect=(id)=>{
//     setprp(prev=>{
//       return{
//         ...prev,seletedproj:id,
//       }
//     })
//   }

//   // const handleselectproj=(id)=>{
//   //   setprp(prev=>{
//   //     return{
//   //       ...prev,seletedproj:id,
//   //     }
//   //   })

//   // }
//   const handlestart=()=>{
//     setprp(prev=>{
//       return{
//         ...prev,seletedproj:null,
//       }
//     })
//   }
//   const handlecancel=()=>{
//     setprp(prev=>{
//       return{
//         ...prev,seletedproj:undefined,
//       }
//     })
//   }
//   const addhand=(d1)=>{

//     setprp(prev=>{
//       const newproj={...d1,id:Math.random() }
//       return{
//         ...prev,project:[...prev.project,newproj]
//       }
//     })
    
//   }
//   console.log(" prop 1 : ",prp);
// //////////////////////////////////////
  
//   const selectedproj1=prp.project.find(p=>p.id===prp.seletedproj)
//   console.log("lpop", selectedproj1)
//   let content=<Selected project={selectedproj1}/>;
// ////////////////////////////////

//   if(prp.seletedproj===null){
//     content=<MainProj onAdd={addhand} onCancel={handlecancel}/>
//   }
//   else if(prp.seletedproj===undefined){
//     content=<Noproj onstart={handlestart}/>
//   }
//   return (
//     <div className='proj'>
//       <SideProj onstart={handlestart} projects={prp.project}
//       onselect={handleselect} />
//       {content}
      
//     </div>
//   )
// }

// export default App

// //<MainProj/>
// ///////////////////////////////////////////////////////// Portfolio////////////////
// import React,{useEffect} from 'react'
// import './App.css'
// import Main1 from './Xxport/Main1/Main1'
// import Navbar from './Xxport/Navbar/Navbar'
// import Skill from './Xxport/SkillCard/Skill'
// import Wk from './Xxport/Workjs/Wk'
// import Contact from './Xxport/Contact/Contact'
// import Education from './Xxport/Education/Education'
// const App = () => {
//   useEffect(() => {
 
//     // Disable text selection for elements
//     // with class "no-select"
//     const noSelectElements =
//         document.querySelectorAll(".no-select");
//     noSelectElements.forEach((element) => {
//         element.style.webkitUserSelect = "none";
//         element.style.mozUserSelect = "none";
//         element.style.msUserSelect = "none";
//         element.style.userSelect = "none";
//     });
// }, []);
//   return (
//     <div  onMouseDown={(e) => e.preventDefault()}
//     onSelectStart={(e) => e.preventDefault()}
//     style={{userSelect: 'none'}}>
//       <Navbar/>
//       <div className='cont'>
//         <Main1/>
//         <Education/>
//         <Skill id='skill'/>
//         <Wk/>
//         <Contact/>
        
//       </div>
      
//     </div>
//   )
// }

// export default App
// // <Main1/>


/////////////////////////////////////////////////////////
// import React from 'react'
// import Nav from './XXXXX/Nav'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <h1>New Dashboard</h1>

//       <Nav/>
//       <Routes>
//         <Route path="/" element={<h1>
//           hi its me
//         </h1>}></Route>
//         <Route path="/upd" element={<h1>
//           update it
//         </h1>}></Route>
//         <Route path="/back" element={<h1>
//           Get back, undo it
//         </h1>}></Route>
//         <Route path="/signin" element={<h1>
//           Sign in doc
//         </h1>}></Route>
//       </Routes>
      
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////
// import { useRef, useState, useCallback } from 'react';

// import Places from './components/Places.jsx';
// import Modal from './components/Modal.jsx';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';
// import logoImg from './assets/logo.png';
// import AvailablePlaces from './components/AvailablePlaces.jsx';

// function App() {
//   const selectedPlace = useRef();

//   const [userPlaces, setUserPlaces] = useState([]);

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   function handleStartRemovePlace(place) {
//     setModalIsOpen(true);
//     selectedPlace.current = place;
//   }

//   function handleStopRemovePlace() {
//     setModalIsOpen(false);
//   }

//   function handleSelectPlace(selectedPlace) {
//     setUserPlaces((prevPickedPlaces) => {
//       if (!prevPickedPlaces) {
//         prevPickedPlaces = [];
//       }
//       if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
//         return prevPickedPlaces;
//       }
//       return [selectedPlace, ...prevPickedPlaces];
//     });
//   }

//   const handleRemovePlace = useCallback(async function handleRemovePlace() {
//     setUserPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
//     );

//     setModalIsOpen(false);
//   }, []);

//   return (
//     <>
//       <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImg} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText="Select the places you would like to visit below."
//           places={userPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />

//         <AvailablePlaces onSelectPlace={handleSelectPlace} />
//       </main>
//     </>
//   );
// }

// export default App;
////////////////////////////////////////////////////////////////////

import React, { useState } from 'react'
import './App.css'
import Login from './store/Login'
import Root from './store/Root'
import SignUp from './store/SignUp'
//import Found from './store/Found'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Welcome from './store/Welcome';

import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {

  const [currentuser,setcurrentuser]=useState('');
  const handle=(user)=>{
    setcurrentuser(user)
  }
  const handlelogout=(user)=>{
    setcurrentuser('');
  }


  const router =createBrowserRouter([
    {path:'/',element:<Root/>, children:[
        {path:'/',element:<SignUp/>},
        {path:'/login',element :<Login onClick={handle}/>},
        {path:'/welcome',element:<Welcome OnUser={currentuser} onLogout={handlelogout}/>},
        
        
    ]
  }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
      
      
      
      
      
      
      
    </div>
  )
}

export default App

