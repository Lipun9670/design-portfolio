import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const roles = ["Web Developer", "Designer", "Freelancer"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [typing, setTyping] = useState(true);



  useEffect(() => {
    const typeTimeout = setTimeout(() => {
      if (typing) {
        if (charIndex < currentRole.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTyping(false);
          setTimeout(() => setTyping(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIndex((index + 1) % roles.length);
          setCurrentRole(roles[(index + 1) % roles.length]);
          setTyping(true);
        }
      }
    }, typing ? 200 : 100);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, typing, currentRole, index, roles]);

  return <span id="role">{currentRole.substring(0, charIndex)}</span>;
};




const SmoothScrolling = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    };

    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => anchor.addEventListener('click', handleSmoothScroll));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return null;
};



const App = () => {
  return (
    <div>
      <h2>I am a <Typewriter /></h2>
      <SmoothScrolling />
    </div>
  );
};

export default App;