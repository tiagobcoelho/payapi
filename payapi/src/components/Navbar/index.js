import React from 'react';
import {Link} from 'gatsby';
import Logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <div>
      <div>
        <Logo />
        <div>
          <Link to="/pricing">Picing</Link>
          <Link to="/abput">About</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>
    </div>
  );
};
