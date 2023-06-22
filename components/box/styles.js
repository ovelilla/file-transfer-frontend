import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";
import { shadows } from "@/styles/shadows";

export const StyledBox = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding: 24px;
    background-color: ${white};
    box-shadow: ${shadows.md};
    border-radius: 16px;

    ${media(breakpoints.sm)} {
        padding: 32px;
    }
`;
