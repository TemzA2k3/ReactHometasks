import React from 'react';
import "./Footer.scss";
import logo from "../../assets/images/preview.svg";
import { linksObj, text, icons } from "../../constants/constants";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterImages from "./FooterImages/FooterImages";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__data">
                <div className="footer__data__content">
                    <div className="footer__data__content__description">
                        <div className="footer__data__content__description__img">
                            <img src={logo} alt="logo" />
                        </div>
                        <h4 className="footer__data__content__description__text">
                            {text}
                        </h4>
                    </div>
                    <div className="footer__data__content__links">
                        {Object.values(linksObj).map((item, index) => (
                            <FooterLinks key={index} data={item} />
                        ))}
                    </div>
                </div>
                <div className="footer__data__lable">
                    <div className="footer__data__lable__line"></div>
                    <div className="footer__data__lable__content">
                        <h4 className="footer__data__lable__content__text">
                            Built by <span className="footer__data__lable__content__text__links">Flowbase</span>· Powered by
                            <span className="footer__data__lable__content__text__links"> Webflow</span>
                        </h4>
                        <div className="footer__data__lable__content__images">
                            {Object.values(icons).map((item, index) => (
                                <FooterImages key={index} settings={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
