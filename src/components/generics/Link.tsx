import React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
    name: string;
    to: string;
    className?: string;
}

const GenericLink: React.FC<LinkProps> = (props) => {
    const { name , to, className } = props;

    return (
        <React.Fragment key={to}>
            <Link className={className} to={to}>{name}</Link>
        </React.Fragment>
    )

}

export default GenericLink;
