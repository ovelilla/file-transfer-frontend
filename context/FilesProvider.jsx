import { useState, createContext } from "react";
import axios from "@/config/axios";

const FilesContext = createContext();

export const FilesProvider = ({ children }) => {
    const [files, setFiles] = useState([]);

    return (
        <FilesContext.Provider
            value={{
                files,
                setFiles,
            }}
        >
            {children}
        </FilesContext.Provider>
    );
};

export default FilesContext;
