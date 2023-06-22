import useFiles from "@/hooks/useFiles";
import formatBytes from "@/utils/formatBytes";
import getFileExtension from "@/utils/getFileExtension";
import FileIcon from "@/icons/File";
import XLg from "@/icons/XLg";
import { Li, Content, Name, Details, Detail, Delete } from "./styles";

const File = ({ file }) => {
    const { setFiles } = useFiles();

    const handleDelete = (file) => {
        setFiles((prevFiles) => prevFiles.filter((f) => f.key !== file.key));
    };

    return (
        <Li>
            <FileIcon />

            <Content>
                <Name>{file.path}</Name>

                <Details>
                    <Detail>{formatBytes(file.size)}</Detail>
                    <Detail>{getFileExtension(file.type)}</Detail>
                </Details>
            </Content>

            <Delete onClick={() => handleDelete(file)}>
                <XLg />
            </Delete>
        </Li>
    );
};

export default File;
