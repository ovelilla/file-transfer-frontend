import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const StyledHeader = styled.header``;

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

export const Logo = styled.div`
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -1.2px;

    ${media(breakpoints.sm)} {
        font-size: 32px;
    }

    span {
        color: #fb265e;
    }
`;

export const Nav = styled.nav`
    display: flex;

    ul {
        display: flex;
    }

    li {
        display: flex;
        list-style: none;

        &:last-of-type {
            a,
            button {
                background-color: #fb265e;
                border-radius: 8px;
                font-weight: 500;
                color: ${white};

                &:hover {
                    background-color: #e40540;
                    text-decoration: none;
                }
            }
        }
    }

    a,
    button {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 16px;

        ${media(breakpoints.sm)} {
            height: 48px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;
