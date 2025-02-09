import React, { useState } from 'react'
import gym from '../asstes/gym.png'
import dumbell from '../asstes/dumbell.png'
import './Content.css';

const Content = () => {
    const [buttonlist] = useState(["Join now", "Contact Us"])
    return (
    <section className="main-section">
        <div className="content">
            <img className="dumbell" src={dumbell} alt="dumbell" />
            <p className="landing-title">The best fitness gym in the town is <br />here</p>
            <p className="landing-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error corporis fugit dolore adipisci aperiam omnis nisi dolores hic eius in ex id iure, ea sunt asperiores et voluptatibus dignissimos autem maiores molestias dolor rem delectus quidem! Inventore.</p>
            <h3 className="deal">The deal ends in expired</h3>
            <ul className="buttons">
                {buttonlist.map((item, index) => (
                    <li key={index}><button>{item}</button></li>
                ))}
            </ul>
            
        </div>
        <div className="content-image">
            <img src={gym} alt="logo" className='gym' />
        </div>
    </section>
    )
}

export default Content;