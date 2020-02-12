// Import React
import React from 'react';

import { connect } from 'react-redux';
// Call our action creators
import { signIn, signOut } from '../Redux/actions';

import Button from '@material-ui/core/Button';


class GoogleAuth extends React.Component {
 
  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '366981656188-1b3psaaj83nbeo8tke8bpnfj3useu6vl.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
    console.log(this.props.isSignedIn)
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <Button variant="contained" color="secondary" onClick={this.onSignOutClick} >Log Out</Button>
    } else {
      return <Button variant="contained" color="primary" onClick={this.onSignInClick}>Log In with Google</Button>
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth);