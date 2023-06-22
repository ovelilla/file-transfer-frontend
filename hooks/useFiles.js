import { useContext } from "react";
import FilesContext from "@/context/FilesProvider";

const useFiles = () => {
    return useContext(FilesContext);
};

export default useFiles;
