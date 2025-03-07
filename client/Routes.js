import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Blockchain from './components/Blockchain';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignupCard from './components/AuthForms/SignupCard';
import LoginCard from './components/AuthForms/LoginCard';
import { UserProvider } from './context/UserContext';
export default function Routes() {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <UserProvider>
          <Sidebar>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/blockchain" component={Blockchain} />
              <Route path="/home" component={Home} />
              <Redirect to="/" />
            </Switch>
          </Sidebar>
        </UserProvider>
      ) : (
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginCard} />
            <Route path="/login" component={LoginCard} />
            <Route path="/signup" component={SignupCard} />
            <Redirect to="/" />
          </Switch>
        </React.Fragment>
      )}
    </div>
  );
}
