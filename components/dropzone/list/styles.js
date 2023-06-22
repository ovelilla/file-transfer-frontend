import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
    cursor: default;
`;

export const Title = styled.h2``;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;
