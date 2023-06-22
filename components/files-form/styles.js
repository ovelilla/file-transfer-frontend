import styled from "@emotion/styled";
import { white, gray, slate } from "@/styles/colors";
import { breakpoints, media } from "@/styles/sizes";
import { shadows } from "@/styles/shadows";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.label``;

export const Input = styled.input`
    height: 48px;
    padding: 0 16px;
    border: 1px solid ${({ error }) => (error ? "#fb265e" : gray[300])};
    border-radius: 4px;
    background-color: ${white};
    color: ${gray[900]};
    letter-spacing: -0.5px;

    &:focus {
        outline-color: ${({ error }) => (error ? "#fb265e" : gray[600])};
    }
`;

export const Error = styled.span`
    color: #fb265e;
    font-size: 12px;
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

export const selectStyles = (error) => ({
    control: (provided, state) => ({
        ...provided,
        height: "48px",
        border: "none",
        outline: "none",
        borderRadius: "4px",
        boxShadow: state.isFocused
            ? gray[600] + " 0px 0px 0px 2px"
            : gray[300] + " 0px 0px 0px 1px",
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: "0 16px",
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: gray[900],
        margin: "0",
    }),
    input: (provided, state) => ({
        ...provided,
        margin: "0",
    }),
    menu: (provided, state) => ({
        ...provided,
        boxShadow: gray[200] + " 0px 0px 0px 1px" + ", " + shadows.md,
    }),
    groupHeading: (provided, state) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        height: "40px",
        padding: "0 16px",
        fontSize: "14px",
    }),
    option: (provided, state) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        height: "48px",
        padding: "0 16px",
        color: gray[700],
        backgroundColor: state.isSelected ? gray[50] : white,
        "&:hover": {
            backgroundColor: state.isSelected ? gray[100] : gray[50],
        },
    }),
});
