import React from 'react';
function Header(props) {
  return (
    <header className="header-custom">
      <nav className='navbar navbar-expand-lg  navbar-light bg-light'><div className="container">
        <a className='navbar-brand' href='#home'>Yan's Zen</a>
        {props.children}</div>
      </nav>
    </header>
  );
}

export default Header;
