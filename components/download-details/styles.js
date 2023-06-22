import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1px;

    ${media(breakpoints.sm)} {
        font-size: 32px;
    }
`;

export const Button = styled.button`
    height: 40px;
    margin-top: 16px;
    padding: 0 16px;
    color: ${white};
    background-color: #fb265e;
    border-radius: 8px;
    font-weight: 500;

    ${media(breakpoints.sm)} {
        height: 48px;
    }

    &:hover {
        background-color: #e40540;
    }
`;
