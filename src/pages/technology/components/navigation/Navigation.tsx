import React from 'react';
import { Link, LinksContainer } from './Navigation.styles';

export const Navigation = () => (
    <LinksContainer>
        <Link to={'/technology'} end>
            1
        </Link>
        <Link to={'/technology/spaceport'}>2</Link>
        <Link to={'/technology/space_capsule'}>3</Link>
    </LinksContainer>
);
