import React from 'react'
import ReactDOM from 'react-dom' // <-- tutorial
// import ReactDOM from 'react-dom/client'; // <-- current npm
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
//Configure Amplify
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

// tutorial
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// npm
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()