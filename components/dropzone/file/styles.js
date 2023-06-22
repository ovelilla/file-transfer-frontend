import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const Li = styled.li`
    display: grid;
    grid-template-columns: 48px 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    position: relative;
    list-style: none;

    &:hover button {
        display: flex;
    }

    > svg {
        width: 32px;
        height: 32px;
        color: ${gray[500]};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.h3`
    grid-column: 2/3;
    grid-row: 1/2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
`;

export const Details = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    align-items: center;

    span:first-of-type::after {
        content: "•";
        padding: 0 8px;
    }
`;

export const Detail = styled.span`
    font-size: 14px;
    color: ${gray[500]};
`;

export const Delete = styled.button`
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 8px 0 32px;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), ${gray[50]} 35%, ${gray[50]});
    color: ${gray[500]};

    svg {
        width: 24px;
        height: 24px;
    }
`;
