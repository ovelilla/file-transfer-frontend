import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1px;

    ${media(breakpoints.sm)} {
        font-size: 32px;
    }
`;
