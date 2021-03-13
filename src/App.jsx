import AppBar from 'Components/AppBar';
import React from 'react';
import { Route, Switch } from 'react-router';
import { HomeView, LoginView, ContactsView, RegisterView } from 'views';

function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </>
  );
}

export default App;
