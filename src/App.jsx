import AppBar from 'Components/AppBar';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { HomeView, LoginView, ContactsView, RegisterView } from 'views';
import { authOperations } from 'redux/auth';

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
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.fetchCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
