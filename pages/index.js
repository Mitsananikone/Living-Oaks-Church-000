 import HomePage from '@/pages/home/homePage';
// import LandingPopup from '@/components/landingPopup/landingPopup';
// import ContactForm from '@/components/contactForm/contactForm';

import React from 'react';
import '../styles/globals.css';
import MeetThePerrins from './meetPerrins/meetPerrins';
import Mission from './mission/mission';
import Plan from './plan/plan';
import Resources from './resources/resources';
import Join from './join/join';
import Contact from './contact/contact';

export default function Home() {
  return (
    <>
        <div className="centerContainer">
          <div className="fullScreen">
            <div className="background">
          <HomePage />
          {/* <MeetThePerrins />
          <Mission />
          <Plan />
          <Resources />
          <Join />
          <Contact /> */}
          </div>
        </div>
        </div>
    </>
  );
}
