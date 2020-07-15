import React, { useState } from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComponent/LoginComponent'
import {BrowserRouter as Router, Route} from "react-router-dom" //just changed name or router
import { User } from './models/User';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
import { HomeComponent } from './components/HomeComponent/HomeComponent'
//import { AllUsersComponent } from './components/AllUsersComponent/AllUsersComponent';

function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)

  return (
    <div className="App">
      <Router>
        <NavBarComponent user={currentUser}/>
        {/*Route path='/users' component={AllUsersComponent}/> */}
        <Route path='/home' component={HomeComponent}/>

        <Route path='/login' render={(props)=>(<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
        <Route path='/profile/:userId' component={ProfileComponent}/>
        <br/>
      </Router>
    </div>
  );
}

export default App;
