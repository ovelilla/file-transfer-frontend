import { useContext } from "react";
import LinkContext from "@/context/LinkProvider";

const useLink = () => {
    return useContext(LinkContext);
};

export default useLink;
