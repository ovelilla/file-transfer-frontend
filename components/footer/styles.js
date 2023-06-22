import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const StyledFooter = styled.footer``;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${breakpoints.xl}px;
    margin: 0 auto;
    padding: 8px 16px;

    ${media(breakpoints.sm)} {
        padding: 16px 24px;
    }
`;
