import React, { useEffect, useState } from 'react'
import { Nav } from './Nav';
import AnchorTemporaryDrawer from './AnchorTemporaryDrawer';
const NavOrNot = () => {
  const [showNav, setShowNav] = useState(true);
  const [showAnchor, setShowAnchor] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth >= 550);
      setShowAnchor(window.innerWidth < 550);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (<>
    {showNav && <Nav />}
        {showAnchor && (
        <div style={{
            borderBottom: '2px solid black', 
            padding: 10, 
            paddingLeft: 0, width: '150%', 
            backgroundColor: 'black'}}>
        <AnchorTemporaryDrawer />
        </div>
        )}
  </>)
}

export default NavOrNot