import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";

export const StyledDropzone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 8px;
    padding: 32px;
    background-color: ${gray[50]};
    border: 2px dashed ${gray[300]};
    border-radius: 8px;
    cursor: pointer;

    > svg {
        width: 48px;
        height: 48px;
        color: ${gray[500]};
    }
`;
