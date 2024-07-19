import React from "react";
import Cards from "./Cards";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="homie">
        <div className="top-banner">
          <div className="content-container">
            <h1 className="fph-1"><b>Good flower choices are good investment</b></h1>
            <br />
            <p className="fpp-1" style={{color:"white"}}>
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, omnis distinctio.
                A ullam illum eligendi voluptatem, rem velit sint cum quas nobis optio, minima vitae?
                Corrupti vel pariatur vero est?
              </i>
            </p>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Home;
