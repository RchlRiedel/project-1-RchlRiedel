import React, { useState } from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComponent/LoginComponent'
import {BrowserRouter as Router, Route} from "react-router-dom" //just changed name or router
import { User } from './models/User';
import { LoginSuccess } from './components/LoginSuccess/Login-Success';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
//import { Button } from '@material-ui/core';
//import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
//import { AllUsersComponent } from './components/AllUsersComponent/AllUsersComponent';


// this is the first and highest component in the hierarchy 
// the root level component
// every other component we make we will put into APP somewhere ( if doing SPA )
function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)

  return (
    <div className="App">
      <Router>
        <NavBarComponent user={currentUser}/>

        <Route path='/profile/:userId' component={ProfileComponent}/>
        {/*Route path='/users' component={AllUsersComponent}/> */}
        <Route path='login-successful'>
            <LoginSuccess /> 
        </Route> 
        <Route path='/login' render={(props)=>(<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />

        <br/>
      </Router>
    </div>
  );
}

export default App;
