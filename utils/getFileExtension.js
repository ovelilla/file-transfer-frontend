const getFileExtension = (fileType) => {
    return fileType.split("/").pop();
};

export default getFileExtension;
