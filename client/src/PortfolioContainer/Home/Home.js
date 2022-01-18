import React from 'react'
import Profile from './Profile/Profile'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './Home.css'
export default function Home() {
    return (
        <div>
            <div className="home-container">
                <Header />
                <Profile />
                <Footer />
            </div>
        </div>
    )
}
