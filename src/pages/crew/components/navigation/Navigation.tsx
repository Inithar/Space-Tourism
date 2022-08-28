import { Link, LinksContainer } from './Navigation.styles';

export const Navigation = () => (
    <LinksContainer>
        <Link to={'/crew'} end></Link>
        <Link to={'/crew/Mark_Shuttleworth'}></Link>
        <Link to={'/crew/Victor_Glover'}></Link>
        <Link to={'/crew/Anousheh_Ansari'}></Link>
    </LinksContainer>
);
