import React from 'react';
import web from "../src/images/student.png";
import Common from './common';



const Home = () => {
    return (
        <>
            <Common
                name="A better learning future starts with"
                imgsrc = {web}
                visit="/Service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;