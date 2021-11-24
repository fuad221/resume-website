import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <>
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'>
                            My Resume
                        </Link>
                        <Link to='/' data-target='side-nav' className='sidenav-trigger '>
                            <i className='material-icons'>menu</i>
                        </Link>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <Link to='/'>               Home            </Link>
                            </li>
                            <li>
                                <Link to='/about'>          About           </Link>
                            </li>
                            <li>
                                <Link to='/skills'>         Skills          </Link>
                            </li>
                            <li>
                                <Link to='/experiences'>    Experiences     </Link>
                            </li>
                            <li>
                                <Link to='/educations'>     Educations      </Link>
                            </li>
                            <li>
                                <Link to='/portfolios'>     Portfolios       </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className='sidenav' id='side-nav'>
                <li>
                    <Link to='/'>               Home            </Link>
                </li>
                <li>
                    <Link to='/about'>          About           </Link>
                </li>
                <li>
                    <Link to='/skills'>         Skills          </Link>
                </li>
                <li>
                    <Link to='/experiences'>    Experiences     </Link>
                </li>
                <li>
                    <Link to='/educations'>     Educations      </Link>
                </li>
                <li>
                    <Link to='/portfolios'>     Portfolios      </Link>
                </li>
            </ul>
        </>
    );
};

export default Navbar
