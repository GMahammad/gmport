import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css"


export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTSANTS = {
        description: "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.",
        highlights: {
            bullets: [
                "Full-stack mobile development",
                "Full-stack mobile development",
                "Full-stack mobile development",
                "Full-stack mobile development",
                "Full-stack mobile development"
            ],
            heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob">

                    </div>
                    <span>{value}</span>
                </div>
            ))
        )
    }


    return (
        <div className='about-me-container screen-container ' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why choose me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile">

                    </div>
                    <div className="about-me-details">
                        <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlights-heading">
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire Me{""}
                            </button>
                            <a href="CV.pdf" download="CV.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
