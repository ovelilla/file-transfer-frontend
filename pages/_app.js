import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { AuthProvider } from "@/context/AuthProvider";
import { LinkProvider } from "@/context/LinkProvider";
import { FilesProvider } from "@/context/FilesProvider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <LinkProvider>
                <FilesProvider>
                    <style jsx global>{`
                        html {
                            font-family: ${poppins.style.fontFamily};
                        }
                    `}</style>
                    <Component {...pageProps} />
                </FilesProvider>
            </LinkProvider>
        </AuthProvider>
    );
}
