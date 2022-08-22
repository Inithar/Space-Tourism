import { Button, Text, Header, StyledSpan, TextContainer, Wrapper } from './Home.styles';

export const Home = () => {
    return (
        <Wrapper>
            <TextContainer>
                <Header>
                    So, you want to travel to
                    <StyledSpan>Space</StyledSpan>
                </Header>
                <Text>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                    Well sit back, and relax because we’ll give you a truly out of this world experience!
                </Text>
            </TextContainer>
            <Button>Explore</Button>
        </Wrapper>
    );
};
