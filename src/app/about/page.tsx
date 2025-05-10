import React from 'react';
import about from "@styles/about.module.css"; 

const AboutPage = () => {
    return (
        <div className={about.about}>
            <p className={about.quote}>
            Innovation has nothing to do with how many R&D dollars you have. When Apple came up with the Mac, IBM was spending at least 100 times more on R&D. It's not about money. It's about the people you have, how you're led, and how much you get it.
            </p>
            <p className={about.quoteName}>- Steve Jobs</p>
            <div className={about.main}>

            <h1 className={about.title}>ABOUT US</h1>
            <p className={about.description}>The DPSRPK Tech Club is an initiative by the school to foster innovation, creativity and a love and understanding for technology amongst the students. This is done through organizing various events and fests, such as Logique, as well as participating in other schools’ fests, such as Youthopia (The Heritage School) and Exypnos.(La Martiniere For Boys). Our student mentors are always there to help guide members who may be enthusiastic about technology but lack certain technical knowledge. Whether you’re just a beginner, or a seasoned tech enthusiast, DPSRPK’s Tech Club offers ample opportunities to grow and make a meaningful impact.
            </p>
            </div>
        </div>
    );
};

export default AboutPage;