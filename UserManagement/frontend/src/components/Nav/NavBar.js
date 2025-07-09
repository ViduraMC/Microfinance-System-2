import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyApp</div>
      <ul style={styles.navLinks}>
        <li><Link to="/mainhome" style={styles.link}>Home</Link></li>
        <li><Link to="/adduser" style={styles.link}>Add User</Link></li>
        <li><Link to="/userdetails" style={styles.link}>User Details</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:0,
    padding: '10px 30px',
    backgroundColor: '#1e293b',
    color: 'white',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default NavBar;
