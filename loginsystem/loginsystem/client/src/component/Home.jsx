import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <section style={{
      backgroundColor:'purple',
      width:'100%',
      height:'90vh'
    }}>
     <div className="box">
      
      <h1>WELCOME</h1>
      <NavLink to="/profile" className="btn btn-warning">Get Started</NavLink>
     </div>
      
      
      </section>      
    </>
  )
}

export default Home;
