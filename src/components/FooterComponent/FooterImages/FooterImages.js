import React, { Component } from 'react';

class FooterImages extends Component {
    render() {
        const { settings } = this.props;
        const imageStyle = {
            width: settings.width,
            height: settings.height
        };

        return (
            <div className="footer__data__lable__content__images__item">
                <img src={settings.icon} alt="icons" className="footer__data__lable__content__images__item__img" style={imageStyle}/>
            </div>
        );
    }
}

export default FooterImages;
