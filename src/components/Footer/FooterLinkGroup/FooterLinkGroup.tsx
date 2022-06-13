import React from 'react';
import { Link } from 'react-router-dom';
import { GenericLink } from '@entities/GenericLink';

interface FooterLinkGroupProps {
    links: GenericLink[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = (props) => {

    return (
        <>
            {
                props.links.map((prop, i) => {
                    return (
                        <li key={i}>
                            <Link to={prop.to}>{prop.name}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default FooterLinkGroup
