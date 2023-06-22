import { useEffect, useState } from "react";
import useLink from "@/hooks/useLink";
import List from "@/components/transfer-details/list";
import CopyIcon from "@/icons/Copy";
import { Title, FileTitle, Button, CopyButton } from "./styles";

const TransferDetails = () => {
    const [buttonText, setButtonText] = useState("");

    const { link, setLink } = useLink();

    useEffect(() => {
        if (link) {
            setButtonText(process.env.NEXT_PUBLIC_FRONTEND_URL + "/" + link.url);
        }
    }, [link]);

    const copyLink = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_FRONTEND_URL + "/" + link.url);
        setButtonText("Copied!");
        setTimeout(() => {
            setButtonText(process.env.NEXT_PUBLIC_FRONTEND_URL + "/" + link.url);
        }, 1000);
    };

    const sendAnother = () => {
        setLink(null);
    };
    
    return (
        <>
            <Title>Transfer details</Title>

            <div>
                <FileTitle>{link.title}</FileTitle>
                {link.description && <p>{link.description}</p>}
                <p>Remaining downloads: {link.downloads}</p>
            </div>

            <List />

            <CopyButton type="button" onClick={copyLink}>
                {buttonText}
                <CopyIcon />
            </CopyButton>

            <Button type="button" onClick={sendAnother}>
                Send another?
            </Button>
        </>
    );
};

export default TransferDetails;
