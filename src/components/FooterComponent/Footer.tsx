import { FC } from 'react';

import { FooterLinks, FooterImages } from "../index";
import { linksObj, text, icons } from "../../constants/constants";

import "./Footer.scss";

import logo from "../../assets/images/preview.svg";


export const Footer: FC = () => {
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
                        {linksObj.map((item, index) => (
                            <FooterLinks key={index} name={item.name} values={item.values}/>
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
                            {icons.map((item, index) => (
                                <FooterImages key={index}
                                              icon={item.icon}
                                              width={item.width}
                                              height={item.height}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
