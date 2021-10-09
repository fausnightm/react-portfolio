import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';


function Header() {
    const { currentTab, setCurrentTab } = useState();

    const renderPage = () => {
        switch (currentTab) {
        //   case 'About':
        //     return <About />;
          case 'Contact':
            return <Contact />;
          case 'Portfolio':
            return <Portfolio />;          
          case 'Resume':
            return <Resume />;
          default:
            return <About />;
        }
      };

    return (
        <div>
            <header>
                <div>
                    <h1 id="header">Max Fausnight</h1>
                </div>
                <div>
                    <Navigation currentTab = { currentTab } setCurrentTab = { setCurrentTab }/>
                </div>
            </header>
            <div>{renderPage(currentTab)}</div>
        </div>
    );
}

export default Header;