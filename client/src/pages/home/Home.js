import Formations from '../../components/formations/Formations';
import Aboutme from '../../components/aboutme/Aboutme';
import Profile from '../../components/profile/Profile';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import React from 'react';

function Home() {

    return (
        <>
            <Navbar />
            <Profile />
            <Aboutme />
            <div id='formations'>
                <Formations />
            </div>
            <div id='projets'>
                <Projects />
            </div>
            <div id='contact'>
                <Contact />
            </div>
        </>
    )
}

export default Home