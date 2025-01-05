import HomePage from "@/pages/home/homepage";
// import LandingPopup from '@/components/landingPopup/landingPopup';
// import ContactForm from '@/components/contactForm/contactForm';

import React from "react";
import "../styles/globals.css";
import MeetThePerrins from "./meetPerrins/meetPerrins";
import Mission from "./mission/mission";
import Plan from "./plan/plan";
import Resources from "./resources/resources";
import Join from "./join/join";
import Contact from "./contact/contact";

export default function Home() {
  return (
    <>
      <div className="centerContainer">
        <div className="fullScreen">
          <div className="background">
            <div className="sections">
              <section id="home">
                <HomePage />
              </section>
              {/* <section id="meetPerrins">
                <MeetThePerrins />
              </section>
              <section id="mission">
                <Mission />
              </section>
              <section id="plan">
                <Plan />
              </section>
              <section id="resources">
                <Resources />
              </section>
              <section id="join">
                <Join />
              </section>
              <section id="contact">
                <Contact />
              </section> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
