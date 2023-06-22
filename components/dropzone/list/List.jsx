import useFiles from "@/hooks/useFiles";
import File from "@/components/dropzone/file";
import { Container, Title, Ul } from "./styles";

const List = () => {
    const { files } = useFiles();

    return (
        <Container onClick={(e) => e.stopPropagation()}>
            <Title>Files</Title>
            <Ul>
                {files.map((file) => (
                    <File key={file.key} file={file} />
                ))}
            </Ul>
        </Container>
    );
};

export default List;
