import React from 'react';

import Card from './card'
import './CardContainer.css'; // Import CSS for styling
import image1 from '../../../img/doctor-showing-plastic-heart.jpg'
import image2 from '../../../img/occupation-science-digitally-generated-folder-chemistry.jpg'
import image3 from '../../../img/happy-senior-businessman-male-doctor-handshaking-while-greeting-hallway-clinic.jpg'

const CardContainer = () => {
    return (
        <>
        <div className='cardheading'>
            <h2>Our Channel Partner</h2>
            {/* <p>Meet Our Channerl Partner.</p> */}
       
        <div className="card-container">
        <Card 
                title="Card 1" 
                description="Details about Card 1." 
                imageUrl= {image3}
            />
            <Card 
                title="Card 2" 
                description="Details about Card 2." 
                imageUrl= {image3}
            />
            <Card 
                title="Card 3" 
                description="Details about Card 3." 
                imageUrl= {image3}
            />
        </div>
        </div>
        
        </>
      
    );
};

export default CardContainer;
