import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import "@/styles/globals.css";

function Plan() {
  return (
    <div className="centerContainer">
      <div className="background">
        {/* Header */}
        <h1 className="title" style={{ marginTop: "160px" }}>
          <i className="fa-solid fa-clipboard-list"></i> The Plan
        </h1>

        {/* 1st point */}
        <div className="contentRow">
          <div className="textContainerLeft">
            <div>
              <h2>Begin working with Care Team</h2>
              <br />
              <p>
                {" "}
                Spend time bonding around the Word, mission and values. Plan out
                specific ministries and their approaches.
              </p>
            </div>
          </div>
          <div className="parallelogramContainer">
            <Parallelogram
              width="100px"
              height="100px"
              color="var(--primary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  1
                </h1>
              </div>
            </Parallelogram>
          </div>
        </div>

        {/* 2nd point */}
        <div className="contentRow">
          <div className="textContainerLeft">
            <div>
              <h2>Practice Services & Promotion</h2>
              <br />
              <p>
                {" "}
                Learning how to roll out and take up a worship service in a rented location takes practice.  We also need to start spreading the news.
              </p>
            </div>
          </div>
          <div className="parallelogramContainer">
            <Parallelogram
              width="100px"
              height="100px"
              color="var(--primary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  2
                </h1>
              </div>
            </Parallelogram>
          </div>
        </div>

        {/* 3rd point */}
        <div className="contentRow">
          <div className="textContainerLeft">
            <div>
              <h2>Launch Regular Services</h2>
              <br />
              <p>
                {" "}
               Start the church with Launch Team strategically helping during the first year and more.
              </p>
            </div>
          </div>
          <div className="parallelogramContainer">
            <Parallelogram
              width="100px"
              height="100px"
              color="var(--primary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  3
                </h1>
              </div>
            </Parallelogram>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
