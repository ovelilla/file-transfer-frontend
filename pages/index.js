import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useAuth from "@/hooks/useAuth";
import useLink from "@/hooks/useLink";
import useFiles from "@/hooks/useFiles";
import Layout from "@/components/layout";
import Box from "@/components/box";
import TransferDetails from "@/components/transfer-details";
import Dropzone from "@/components/dropzone";
import FilesForm from "@/components/files-form";
import { Content, Title } from "./styles";

export default function Home() {
    const { link, setLink } = useLink();
    const { setFiles } = useFiles();

    const router = useRouter();

    useEffect(() => {
        setFiles([]);
        setLink(null);
    }, [router]);

    return (
        <Layout>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>File transfer</title>
            </Head>

            <Box>
                <Content>
                    {link && <TransferDetails />}

                    {!link && (
                        <>
                            <Title>Share files with ease</Title>

                            <p>
                                File transfer allows you to send files with a link that
                                automatically expires to ensure your stuff does not remain online
                                forever.
                            </p>

                            <Dropzone />

                            <FilesForm />
                        </>
                    )}
                </Content>
            </Box>
        </Layout>
    );
}
