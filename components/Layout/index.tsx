import {ReactNode, useEffect} from "react";
import {Icon} from "ts-react-feather-icons";
import {useState} from "react";
import {Fade} from "pages";
function Layout({children}: {children: ReactNode}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    if (window) {
      setwindowWidth(window?.innerWidth);
    }
  }, []);
  return (
    <div className="Layout">
      <header className="flex items-center w-full py-3 lg:h-[100px] fixed top-0 z-10 bg-mainBg">
        <nav className={`Nav`}>
          <h1 className="heading big-heading letter-shadow relative z-40 ml-1">
            <span className="text-primary">R</span>
          </h1>
          <button className="relative z-40 md:hidden" onClick={toggleNav}>
            <Icon name={isNavOpen ? "x" : "menu"} size={22} />
          </button>
          <nav className={`nav_list_wrap ${isNavOpen ? "show-nav" : ""}`}>
            <ol className="nav_list">
              <li>
                <a onClick={toggleNav} href="#about">
                  <Fade when={isNavOpen || windowWidth >= 760} bottom>
                    About
                  </Fade>
                </a>
              </li>
              <li>
                <a onClick={toggleNav} href="#works">
                  <Fade when={isNavOpen || windowWidth >= 760} bottom>
                    Work
                  </Fade>
                </a>
              </li>
              <li>
                <a onClick={toggleNav} href="#contact">
                  <Fade when={isNavOpen || windowWidth >= 760} bottom>
                    Contact
                  </Fade>
                </a>
              </li>
            </ol>
            <a href="#resume" className="btn">
              <span>
                <Fade when={isNavOpen || windowWidth >= 760} bottom>
                  Resume
                </Fade>
              </span>
            </a>
            <Fade when={isNavOpen || windowWidth >= 760} bottom cascade>
              <div className="contact-icons">
                <a href="#" className="icon">
                  <Icon name="twitter" size={20} />
                </a>
                <a href="#" className="icon">
                  <Icon name="instagram" size={20} />
                </a>
                <a href="#" className="icon">
                  <Icon name="linkedin" size={20} />
                </a>
                <a href="#" className="icon">
                  <Icon name="github" size={20} />
                </a>
              </div>
            </Fade>
          </nav>
        </nav>
      </header>
      <div aria-orientation="vertical" className="side-links left-8 right-auto">
        <a href="mailto:raji@gmail.com">
          <Icon name="github" size={18} />
        </a>
        <a href="mailto:raji@gmail.com">
          <Icon name="instagram" size={18} />
        </a>
        <a href="mailto:raji@gmail.com">
          <Icon name="twitter" size={18} />
        </a>
        <a href="mailto:raji@gmail.com">
          <Icon name="linkedin" size={18} />
        </a>
      </div>
      <div aria-orientation="vertical" className="side-links right-8 left-auto">
        <a className="email-link" href="mailto:raji@gmail.com">
          raji@gmail.com
        </a>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
