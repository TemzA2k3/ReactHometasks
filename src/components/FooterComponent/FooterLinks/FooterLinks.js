import React from 'react';

const FooterLinks = ({ data }) => {
    return (
        <div className="footer__data__content__links__column">
            <h3 className="footer__data__content__links__column__name">{data["name"]}</h3>
            {data["values"].map((item, index) => (
                <a href="https://www.google.com/" key={index} className="footer__data__content__links__column__item">{item}</a>
            ))}
        </div>
    );
}

export default FooterLinks;
