import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const StyledBody = styled.main``;

export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: ${breakpoints.xl}px;
    margin: 0 auto;
    padding: 8px 16px;

    ${media(breakpoints.sm)} {
        padding: 16px 24px;
    }
`;
