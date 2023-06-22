import useLink from "@/hooks/useLink";
import File from "@/components/transfer-details/file";
import { Ul } from "./styles";

const List = () => {
    const { link } = useLink();

    return (
        <Ul>
            {link.files.map((file) => (
                <File key={file._id} file={file} />
            ))}
        </Ul>
    );
};

export default List;
