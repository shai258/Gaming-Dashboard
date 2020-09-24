import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';

import './HomePage.css';

const Home = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]);

  if (authState.isPending) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="homaPage">
      <h1 className="homePageTitle">Home Page</h1>

      { authState.isAuthenticated && !userInfo && <div>Loading user information...</div>}

      {authState.isAuthenticated && userInfo && (
        <div>
          <p>Hello, {userInfo.name}!</p>
          <p>Back to <a href="/gaming-dashboard">Dashboard.</a></p>
        </div>
      )}

      {!authState.isAuthenticated&& (
        <div>
          <p>Hello, guest!</p>
          <p>Please login...</p>
        </div>
      )}

    </div>
  );
};

export default Home;