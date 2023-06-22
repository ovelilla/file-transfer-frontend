import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
import useFiles from "@/hooks/useFiles";
import CloudArrowUp from "@/icons/CloudArrowUp";
import List from "@/components/dropzone/list";
import { StyledDropzone } from "./styles";

const Dropzone = () => {
    const { files, setFiles } = useFiles();

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => (file.key = uuidv4()));
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <StyledDropzone {...getRootProps()}>
            <input {...getInputProps()} />

            {!files.length && <CloudArrowUp />}
            {!files.length && isDragActive && <p>Drop the files here ...</p>}
            {!files.length && !isDragActive && (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
            {!!files.length && <List />}
        </StyledDropzone>
    );
};

export default Dropzone;
