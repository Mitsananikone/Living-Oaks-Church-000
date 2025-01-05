import React, { useEffect, useState, useRef } from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";

function HomePage() {
  return (
    <flexcenter>
     
      <Parallelogram width="300px" height="150px" color="#897349">
      <h1>The Plan</h1>
      </Parallelogram>
    </flexcenter>
  );
}

export default HomePage;
