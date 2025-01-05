import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import "@/styles/globals.css";

function HomePage() {
  return (
    <flexbox>
    <div>
      {/* First Parallelogram */}
      <Parallelogram
        width="550px"
        height="500px"
        color="var(--primary-color)"
        top="0vh"
        left="0vw"
      >
        {/* This div will hold the text and counter the skew applied to the parallelogram */}
        <div
          style={{
            position: "relative", // Keep the content positioned in the default flow
            zIndex: 1, // Ensure it's on top of the parallelogram
            textAlign: "left", // Align the text as desired
            transform: "skew(20deg)", // Counteract the skew of the parallelogram
          }}
        >
          <h1
            style={{
              color: "var(--secondary-color)",
              fontSize: "2.5rem",
              fontStyle: "normal",
            }}
          >
            LIVING
          </h1>
          <h1
            style={{
              color: "var(--secondary-color)",
              fontSize: "2.5rem",
              fontStyle: "normal",
            }}
          >
            OAKS
          </h1>
          <h1
            style={{
              color: "var(--secondary-color)",
              fontSize: "2.5rem",
              fontStyle: "normal",
            }}
          >
            CHURCH
          </h1>

          <h6
            style={{
              color: "var(--foreground-color)",
              fontSize: "0.7rem",
              fontStyle: "normal",
            }}
          >
            <i>
              ...that they may be called oaks of righteousness, the planting of
              the Lord, that he may be glorified. <br /> - Isaiah 61:3
            </i>
          </h6>

          <div
            style={{
              width: "100%", // Full width of the parent container
              height: "2px", // Line height
              background:
                "linear-gradient(to right, white 33%, rgba(255, 255, 255, 0.5) 33%, rgba(255, 255, 255, 0.5) 100%)",
              marginTop: "40px", // Space between text and the line
            }}
          ></div>

          <h1
            style={{
              color: "var(--secondary-color)",
              fontSize: "0.8rem",
              fontStyle: "normal",
              marginTop: "40px",
            }}
          >
            LEADING real People to find <br/> REAL hope in Jesus.
          </h1>
        </div>
      </Parallelogram>

      {/* Second Parallelogram with PNG background */}
      <Parallelogram
        width="400px"
        height="450px"
        top="10vh"  // Position it a bit lower
        left="0vw"  // Position it to the right of the first parallelogram
        color="var(--primary-color)"
        backImage="url('/images/LOCoakHomepage.jpg')"
      >
        {/* This div will hold content */}
        <div
          style={{
            position: "relative", // Keep the content positioned in the default flow
            zIndex: 1, // Ensure it's on top of the parallelogram
            textAlign: "left", // Align the text as desired
            transform: "skew(20deg)", // Counteract the skew of the parallelogram
            height: "100%", // Ensure div takes full height of parallelogram
            width: "100%", // Ensure it takes full width
            // backgroundImage: "url('/images/LOCoakHomepage.jpg')", // Set the correct background image path
            backgroundSize: "cover", // Make image cover the entire container (larger than parallelogram)
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent image from repeating
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%, 15% 20%, 85% 20%)", // Clip to a parallelogram shape
            overflow: "hidden", // Hide any overflowing parts of the image
          }}
        >
          
        </div>
      </Parallelogram>
    </div>
    </flexbox>
  );
}

export default HomePage;
