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

export const FileTitle = styled.h2`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 600;
`;

export const Name = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
`;

export const Details = styled.div`
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

export const CopyButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin-top: 16px;
    padding: 0 16px;
    color: ${gray[600]};
    border: 1px solid ${gray[300]};
    border-radius: 8px;

    ${media(breakpoints.sm)} {
        height: 48px;
    }

    &:hover {
        background-color: ${gray[50]};
    }

    svg {
        width: 20px;
        height: 20px;
        color: ${gray[500]};
    }
`;
