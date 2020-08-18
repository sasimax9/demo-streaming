import React from "react";
import FacebookLogo from "../../assets/social/facebook-white.svg";
import TwitterLogo from "../../assets/social/twitter-white.svg";
import InstagramLogo from "../../assets/social/instagram-white.svg";

import AppStoreLogo from "../../assets/store/app-store.svg";
import PlayStoreLogo from "../../assets/store/play-store.svg";
import WindowsLogo from "../../assets/store/windows-store.svg";

import "./footer.css";

export default function Footer() {
    return (
        // <div classNameName="footer">

        <footer className="py-5 bg-dark mt-4">
            <div className="container">
                <div className="m-0 text-center text-white">
                    <div className="row d-flex justify-content-center mt-4">
                        <img
                            className="socialSize ml-3"
                            alt="Facebook Logo"
                            src={FacebookLogo}
                        />
                        <img
                            className="socialSize ml-3"
                            alt="Twitter Logo"
                            src={TwitterLogo}
                        />
                        <img
                            className="socialSize ml-3"
                            alt="Instagram Logo"
                            src={InstagramLogo}
                        />
                    </div>
                    <div className="row d-flex justify-content-center mt-4">
                        <img
                            className="storeSize ml-2"
                            alt="AppStore Logo"
                            src={AppStoreLogo}
                        />
                        <img
                            className="storeSize ml-2"
                            alt="PlayStore Store Logo"
                            src={PlayStoreLogo}
                        />
                        <img
                            className="storeSize ml-2"
                            alt="Microsoft Store Store Logo"
                            src={WindowsLogo}
                        />
                    </div>
                    <div className="row d-flex justify-content-center mt-4">
                        <p className="ml-4">Home </p>
                        <p className="ml-4">Terms and Conditions</p>
                        <p className="ml-4">Privacy Policy</p>
                        <p className="ml-4">Collection Statement</p>
                        <p className="ml-4">Help</p>
                        <p className="ml-4">Manage Account</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
