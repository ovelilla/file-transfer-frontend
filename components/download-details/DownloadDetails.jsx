import { useState } from "react";
import { useRouter } from "next/router";
import axios from "@/config/axios";
import useLink from "@/hooks/useLink";
import downloadFile from "@/utils/downloadFile";
import DownloadForm from "@/components/download-form";
import List from "@/components/download-details/list";
import { Title, Button } from "./styles";

const DownloadDetails = () => {
    const [download, setDownload] = useState(false);

    const router = useRouter();
    const { url } = router.query;
    const { link, setLink, password } = useLink();

    const handleDownload = async () => {
        try {
            const { data } = await axios.get(`/files/${url}`, {
                responseType: "blob",
            });

            downloadFile(data, link);
            setDownload(true);
            setLink(null);
        } catch (error) {
            console.log(error);
            alert("An error occurred while downloading the file.");
        }
    };

    return (
        <>
            {link && password && (
                <>
                    <Title>Link protected</Title>
                    <DownloadForm />
                </>
            )}

            {link && !password && (
                <>
                    <Title>Ready to download</Title>
                    <p>Remaining downloads: {link.downloads}</p>
                    <List />
                    <Button type="button" onClick={handleDownload}>
                        Download
                    </Button>
                </>
            )}

            {!link && download && (
                <>
                    <Title>Download completed</Title>
                    <p>Thank you for using our service.</p>
                </>
            )}

            {!link && !download && (
                <>
                    <Title>No link found</Title>
                    <p>The link you are trying to access does not exist or has expired.</p>
                </>
            )}

            {!link && (
                <Button type="button" onClick={() => router.push("/")}>
                    Go to home
                </Button>
            )}
        </>
    );
};

export default DownloadDetails;
