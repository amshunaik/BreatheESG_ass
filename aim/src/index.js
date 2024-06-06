import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Theme from './SCASS/Theme';
//import reportWebVitals from './reportWebVitals';
//import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
//import Overlays from './component/UI/Modal'
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="534384847910-1ukn6itp8pndsq2706lmm3em0n6pk21v.apps.googleusercontent.com">
      <App/>
        
          
            
        
        </GoogleOAuthProvider>;
    
    </React.StrictMode>,
    


);

// <Quescover>
//            <App />
//        </Quescover>

{/* <Provider store={Theme}> 
            <App/>
        </Provider> */}