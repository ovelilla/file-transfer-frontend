import formatBytes from "@/utils/formatBytes";
import getFileExtension from "@/utils/getFileExtension";
import FileIcon from "@/icons/File";
import { Li, Content, Name, Details, Detail } from "./styles";

const File = ({ file }) => {
    return (
        <Li>
            <FileIcon />

            <Content>
                <Name>{file.originalname}</Name>

                <Details>
                    <Detail>{formatBytes(file.size)}</Detail>
                    <Detail>{getFileExtension(file.mimetype)}</Detail>
                </Details>
            </Content>
        </Li>
    );
};

export default File;
