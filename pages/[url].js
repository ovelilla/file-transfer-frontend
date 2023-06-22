import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "@/config/axios";
import useLink from "@/hooks/useLink";
import Layout from "@/components/layout";
import Box from "@/components/box";
import DownloadDetails from "@/components/download-details";

import { Content } from "./styles";

const Link = () => {
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const { url } = router.query;
    const { setLink, setPassword } = useLink();

    const fetchLink = async () => {
        try {
            const { data } = await axios.get(`/links/${url}`);
            setLink(data.link);
            setPassword(data.password);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url) {
            fetchLink();
        }
    }, [url]);

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
                    {loading && <p>Loading...</p>}
                    {!loading && <DownloadDetails />}
                </Content>
            </Box>
        </Layout>
    );
};

export default Link;
