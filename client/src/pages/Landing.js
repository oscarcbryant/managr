import React from 'react';
import image from '../components/image.jpg';
import '../components/styles/Landing.css'


function Landing() {
    return (
        <div className = 'landing'>
            <h1>Welcome to: managr</h1>
            <h3>Make managing your team as easy as 1, 2, 3!</h3>
            {/* <Container>
                <h1>Login</h1>
            </Container> */}
            <img src={image} />
        </div>
    );
  }
  
  export default Landing;