import React, { Component } from 'react'


export class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <div className='hero-container'>
                    <div className='hero-text'>
                        <span className="badge">New Arrival 2026</span>
                        <h1>Upgrade Your Desktop Performance</h1>
                        <p>
                            Get the best deals on high-end motherboards, powerful GPUs, and 
                            lightning-fast processors. Built for gamers, creators, and pros.
                        </p>
                        <div className='hero-btns'>
                            <button className='hero-btn primary'>Explore Products</button>
                            <button className='hero-btn secondary'>View Specs</button>
                        </div>
                    </div>
                    
                    <div className='hero-features'>
                        <div className='feature-item'>
                            <span>🚀</span>
                            <p>Free Next Day Delivery</p>
                        </div>
                        <div className='feature-item'>
                            <span>🛡️</span>
                            <p>2 Year Full Warranty</p>
                        </div>
                        <div className='feature-item'>
                            <span>🎧</span>
                            <p>24/7 Tech Support</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero