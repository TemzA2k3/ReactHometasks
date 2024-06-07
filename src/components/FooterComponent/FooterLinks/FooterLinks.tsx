import { FC } from 'react';

import { IFooterLinksTypes } from "../../index"


export const FooterLinks: FC<IFooterLinksTypes> = ({ name, values}) => {
    return (
        <div className="footer__data__content__links__column">
            <h3 className="footer__data__content__links__column__name">{name}</h3>
            {values.map((item, index) => (
                <a href="https://www.google.com/" key={index} className="footer__data__content__links__column__item">{item}</a>
            ))}
        </div>
    );
}
