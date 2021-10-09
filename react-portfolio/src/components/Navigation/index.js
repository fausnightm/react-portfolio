import React from "react";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Portfolio from '../pages/Portfolio';
// import Resume from '../pages/Resume';
// import Header from "../Header";

function Navigation(props) {
    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
    return (
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="nav-item" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.setCurrentTab(tab)}
                className={
                  props.currentTab === tab ? 'navActive' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      );
}

export default Navigation;