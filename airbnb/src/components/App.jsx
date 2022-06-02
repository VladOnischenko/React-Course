import React from 'react';
import Navbar from "./navbar/Navbar";
import logo from '../images/logo.svg'
import About from "./about/About";
import Card from "./card/Card";

import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'

function App() {
  return (
   <main className="page">
      <Navbar logo={logo}/>
      <About />
     <section className="cards">
       <Card
         image={image1}
         description="Life lessons with Katie Zaferes"
         price={136}
         country="USA"
         rates={5.0}
         votes={6}
       />
       <Card
         image={image2}
         description="Learn wedding photography"
         price={125}
         country="USA"
         rates={5.0}
         votes={30}
       />
       <Card
         image={image3}
         description="Group Mountain Biking"
         price={50}
         country="USA"
         rates={4.8}
         votes={2}
       />
     </section>
   </main>
  );
}

export default App;
