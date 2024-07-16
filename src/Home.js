import React from "react";
// import Image from '../src/Components/homie.png'
import Cards from "./Cards";
import "./Home.css";
function Home() {
  return (
      <>
       
      <div className="homie">
      <div class="top-banner">
        <div class="content-container">
            <h1 class="fph-1"><b>Good flower~ choices are good investment</b></h1>
            <br></br>
            <p class="fpp-1"><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, omnis distinctio.
                A ullam illum eligendi voluptatem, rem velit sint cum quas nobis optio, minima vitae?
                Corrupti vel pariatur vero est?</i>
            </p>
         </div>
    </div>
      </div>
  <Cards/>
    </>
  );
}
export default Home;
