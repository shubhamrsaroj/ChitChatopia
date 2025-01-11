import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';


const App = () => {
  return (
    <GoogleOAuthProvider clientId="1097917886622-s45gnj30lrnq82n8pk3jci9i487019jf.apps.googleusercontent.com">
      <div className="App">
        <AccountProvider>
          <Messenger />
          </AccountProvider>

      </div>
    </GoogleOAuthProvider>
  );
};

export default App;