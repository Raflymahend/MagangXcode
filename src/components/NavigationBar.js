// import "../style/landingPage.css";
import logo from "../img/logo.png";

const NavigationBar = () => {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <a href="/" className="logo ms-3">
                <img src={logo} alt="Xcode Logo" />
              </a>

              {/* Navigation Menu */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="scroll-to-section"><a href="#service">Pentest Service</a></li>
                <li className="scroll-to-section"><a href="#faq">FAQ</a></li>
                <li className="scroll-to-section"><a href="#contact">Contact</a></li>
                <li>
                  <div className="gradient-button">
                    <a id="modal_trigger" href="#modal">
                      <i className="fa fa-sign-in-alt"></i> Sign In Now
                    </a>
                  </div>
                </li>
              </ul>

              {/* Trigger untuk Mobile */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
