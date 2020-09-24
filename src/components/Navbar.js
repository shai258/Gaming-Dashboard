import { useOktaAuth } from '@okta/okta-react';
import React from 'react';

import './Navbar.css';

const Navbar = () => {
  const { authState, authService } = useOktaAuth();

  const login = async () => authService.login('/gaming-dashboard');
  const logout = async () => authService.logout('/');

  return (
    <div>
      {authState.isAuthenticated && <div className="btn" onClick={logout}>Logout</div>}
      {!authState.isPending && !authState.isAuthenticated && <div className="btn" onClick={login}>Login</div>}
    </div>
  );
};
export default Navbar;