// import logo from '../../assets/react.svg';
// import person from '../../assets/person.svg';
// import heart from '../../assets/suit-heart.svg';
// import cart from '../../assets/cart.svg';
// import search from '../../assets/search.svg';
import './Header.css';

const Header = () => (
  <>
    <header>
      <div className="container">
        <nav className="navigation">
          <a href="#!" className="logo">
            <img src="images/logo.svg" alt="Logo" className="logo-img" />
          </a>
          <ul className="nav_menu">
            <li className="nav_list">
              <a href="#!" className="nav_link">
                <span>Home</span>
              </a>
            </li>
            <li className="nav_list nav_list_menu">
              <a href="#!" className="nav_link">
                <span>Products</span>
              </a>
              <div className="dropdown">
                <div className="dropdown-inner">
                  <div className="dropdown-item">
                    <h3 className="item-heading">Products</h3>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-1.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Team dashboard</h4>
                        <p>Monitor your metrics.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-2.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Limitless segmentation</h4>
                        <p>Surface hidden trends.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-3.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Group analytics</h4>
                        <p>Learn about your users</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-4.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <span className="info-badge">New</span>
                        <h4>Interactive reports</h4>
                        <p>Measure B2B account health.</p>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <h3 className="item-heading">Use cases</h3>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-5.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Convert</h4>
                        <p>Analyze conversion rates.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-6.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Engage</h4>
                        <p>Measure active usage.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-7.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Retain</h4>
                        <p>Find retention drivers.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-8.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Grow</h4>
                        <p>Grow your user base faster.</p>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <h3 className="item-heading">Resources</h3>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-9.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Blog</h4>
                        <p>The latest industry news.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-10.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Customer stories</h4>
                        <p>Learn how our customers.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-11.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Video tutorials</h4>
                        <p>New features and techniques.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-12.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Documentation</h4>
                        <p>All the boring stuff.</p>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <h3 className="item-heading">Company</h3>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-13.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>About us</h4>
                        <p>Learn about our story.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-14.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Press</h4>
                        <p>News and press resources.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-15.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <span className="info-badge">We’re hiring!</span>
                        <h4>Careers</h4>
                        <p>Join our team!</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="images/icon-16.svg" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Legal</h4>
                        <p>All the boring stuff.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav_list">
              <a href="#!" className="nav_link">
                <span>Resources</span>
              </a>
            </li>
            <li className="nav_list">
              <a href="#!" className="nav_link">
                <span>Pricing</span>
              </a>
            </li>
          </ul>
          <div className="nav_action">
            <a href="#!" className="btn">
              Log in
            </a>
            <a href="#!" className="btn-primary">
              Sign up
            </a>
          </div>
        </nav>
      </div>
    </header>
    {/* <div classNameName="header">
      <a classNameName='header__logo' href="/">
        <img src={logo} alt="logo" />
      </a>
      <a classNameName='header__menu-item' href="/">
        <img src={person} alt="" />
      </a>
      <a classNameName='header__menu-item' href="/">
        <img src={heart} alt="" />
      </a>
      <a classNameName='header__menu-item' href="/">
        <img src={cart} alt="" />
      </a>
    </div>
    <div classNameName="field has-addons">
        <p classNameName="control">
          <input 
            classNameName="input" 
            type="text" 
            placeholder="Suchbegriff eingeben" 
          />
        </p>

      </div> */}
  </>
);

export default Header;
