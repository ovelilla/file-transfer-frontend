import { StyledBody, Container } from "./styles";

const Body = ({ children }) => {
    return (
        <StyledBody>
            <Container>{children}</Container>
        </StyledBody>
    );
};

export default Body;
