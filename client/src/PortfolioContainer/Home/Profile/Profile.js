import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Profile.css"
export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="#">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>

                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-tex">
                            {" "}
                            Hello, I'm{" "}
                            <span className="highlighte-text">Mahammad Gulalov</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev 💻",
                                        1000,
                                        "Full-stack Developer",
                                        1000,
                                        "Software Developer",
                                        1000,
                                        "UI/UX Designer",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end
                                operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
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
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
                <div className="toHome">
                    <button className="tohome-btn"><i class="fas fa-chevron-up"></i></button>
                </div>
            </div>
        </div>
    );
}
