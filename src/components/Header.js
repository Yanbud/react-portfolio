import React from 'react';
function Header(props) {
  return (
    <header className="header-custom">
      <nav className='navbar navbar-expand-lg  navbar-light bg-light'><div className="container">
        <a className='navbar-brand' href='#'>Yan's Zen</a>
        <button className='navbar-toggler' type='button' data-toggle='collaps' data-target='#navbarSupportedContent' aria-controls="navbarSupportedContent" aria-expanded='false' aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        {props.children}</div>
      </nav>
    </header>
  );
}

export default Header;
