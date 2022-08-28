import { Link, LinksContainer } from './Navigation.styles';

export const Navigation = () => (
    <LinksContainer>
        <Link to={'/destination'} end>
            Moon
        </Link>
        <Link to={'/destination/mars'}>Mars</Link>
        <Link to={'/destination/europa'}>Europa</Link>
        <Link to={'/destination/titan'}>Titan</Link>
    </LinksContainer>
);
