import React from 'react';
import './landing.css';
import NavbarMain from '../navbar/navbarmain';

const LandingPage = () => {
  return (
    <div className='main'>
   
    <NavbarMain />
      <section>
        <div className="content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bitmesra.JPG/250px-Bitmesra.JPG" alt="Mountain" className="image" />
          <div className="text">
            <h1>Electric App for Bit Mesra</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam numquam eveniet, ea iste exercitationem nisi quae, repellendus error consequatur eligendi obcaecati dolorem. Natus mollitia iusto architecto. Recusandae, dicta. Neque similique tempore eaque libero nobis dolorum tempora. Quidem suscipit, fugiat veniam ex rem asperiores quasi expedita tempore porro itaque est!.</p>
           
          </div>
        </div>
      </section>

      {/* Rest of the content */}
    </div>
  );
};

export default LandingPage;
