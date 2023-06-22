import { useState, createContext } from "react";

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
    const [link, setLink] = useState(null);
    const [password, setPassword] = useState(false);

    return (
        <LinkContext.Provider
            value={{
                link,
                setLink,
                password,
                setPassword,
            }}
        >
            {children}
        </LinkContext.Provider>
    );
};

export default LinkContext;
