import React from 'react';
import './service.css'

const Service = () => {
    const loop = [
        {
            id: 1,
            heding: 'UI Engineer',
            decs: 'UI Engineer is also known as User Interface Engineer whose job is to think from the user perspective and to design websites and web applications that are attractive and extremely functional.'
        },
        {
            id: 2,
            heding: 'Backend Developer',
            decs: 'Back-end developers are web developers who concentrate on the data that is stored or accessed on a website or through an app. Their role is to develop systems and programs that ensure that the right data is accesse.'
        },
        {
            id: 3,
            heding: 'DevOps Engineer',
            decs: 'DevOps is a set of methods that combines software development and IT operations. It aims to reduce the friction between the systems development life-cycle and provide continuous delivery with high software quality.'
        },
        {
            id: 4,
            heding: ' Web Application Developer',
            decs: 'A web application developer is responsible for maintaining and building software applications according to the client’s specifications and also evaluating codes to ensure industry standardswith high software quality.'
        },
        {
            id: 5,
            heding: ' Mobile Application Developer',
            decs: 'Mobile application developers should be able to produce applications for Android and iOS in accordance with UI and UX trends which are functional as well as elegant.'
        },
        {
            id: 8,
            heding: 'Github',
            decs: 'Mobile application developers should be able to produce applications for Android and iOS in accordance with UI and UX trends which are functional as well as elegant.'
        },

        {
            id: 6,
            heding: 'BoosterApp',
            decs: 'Mobile application developers should be able to produce applications for Android and iOS in accordance with UI and UX trends which are functional as well as elegant.'
        },

        {
            id: 7,
            heding: 'React.js',
            decs: 'Mobile application developers should be able to produce applications for Android and iOS in accordance with UI and UX trends which are functional as well as elegant.'
        },


    ]
    return (
        <div className="service">
            <h4>Service</h4>
            <div className="section-serviee">
                <ul>
                    {
                        loop.map(item => {
                            return (
                                <li key={item.id}>
                                    <div className="service-item">
                                        <h2>{item.heding}</h2>
                                        <p>{item.decs}</p>
                                    </div>
                                </li>
                                
                            )
                        })
                    }
                    
                </ul>

            </div>
        </div>
    );
}



export default Service;
