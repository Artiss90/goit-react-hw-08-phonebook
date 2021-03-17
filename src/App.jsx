import AppBar from 'Components/AppBar';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { HomeView, LoginView, ContactsView, RegisterView } from 'views';
import { authOperations } from 'redux/auth';
import PrivateRoute from 'Components/PrivateRoute';
import PublicRoute from 'Components/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.fetchCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
