import React, { useEffect, useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 250) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic with the search term
    console.log('Search term:', searchTerm);
    setSearchTerm('');
  };

  return (
    <div className={`navbar ${show && 'nav__black'}`}>
      <img
  className="nav__logo"
  src="./image/kinoximg.png"
  alt="KINOX"/>

      <div className="nav__links">
        <a href="/">Home</a>
        <a href="/">Movies</a>
        <a href="/">TV Shows</a>
        <div className="nav__dropdown">
        <button onClick={toggleDropdown} style={{ color: 'white', fontSize: 'inherit' }}>Browse</button>
          {dropdownOpen && (
            <div className="nav__dropdown-content">
              <a href="/">Action</a>
              <a href="/">Romance</a>
              <a href="/">Horror</a>
              <a href="/">Comedy</a>
              <a href="/">SuperNatural</a>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="nav__search-bar"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit" className="nav__search-button">
            Search
          </button>
        </form>
      </div>
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="AVATAR"
      />
    </div>
  );
}

export default Navbar;
