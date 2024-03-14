import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function TutorialNavi() {
  const [isActivePhotoshop, setIsActivePhotoshop] = useState(false);
  const [isActiveIllustrator, setIsActiveIllustrator] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActivePhotoshop(location.pathname.includes('/photoshop'));
    setIsActiveIllustrator(location.pathname.includes('/illustrator'));
  }, [location]);

  return (
    <div className="tutorialNavi">
      <Button href="/">
        <img src={require('../../media/Navbar/home wihte 1.png')} alt="Home"/>
      </Button>
      <Button href='/photoshop' active={isActivePhotoshop}>Photoshop</Button>
      <Button href="/illustrator" active={isActiveIllustrator}>Illustrator</Button>
    </div>
  );
}
