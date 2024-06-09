import { FC } from 'react';

import { IFooterImagesTypes } from "../../index";


export const FooterImages:FC<IFooterImagesTypes> = ({ icon, width, height }) => {
    const imageStyle = {
        width: width,
        height: height,
    };

    return (
        <div className="footer__data__lable__content__images__item">
            <img src={icon} alt="icons" className="footer__data__lable__content__images__item__img" style={imageStyle}/>
        </div>
    );
}
