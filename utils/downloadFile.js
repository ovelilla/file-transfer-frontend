const downloadFile = (data, link) => {
    const href = window.URL.createObjectURL(new Blob([data]));

    const anchor = document.createElement("a");
    anchor.href = href;
    if (link.files.length > 1) {
        anchor.setAttribute("download", `${link.title}.zip`);
    } else {
        anchor.setAttribute("download", link.files[0].originalname);
    }
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};

export default downloadFile;
