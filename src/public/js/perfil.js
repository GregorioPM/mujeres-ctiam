const areaFile = document.getElementById("area-file");

areaFile.addEventListener("dragover", (e) => {
    e.preventDefault();
    areaFile.classList.remove("non-dragging-file");
    areaFile.classList.add("dragging-file");
});

areaFile.addEventListener("dragleave", (e) => {
    e.preventDefault();
    areaFile.classList.remove("dragging-file");
    areaFile.classList.add("non-dragging-file");
});

areaFile.addEventListener("drop", async (e) => {
    e.preventDefault();
    areaFile.classList.remove("dragging-file");
    const selectedFile = e.dataTransfer.files[0];
    var formData = new FormData();
    var fileUploadMeta = JSON.stringify({
        size: selectedFile.size,
        name: selectedFile.name,
        type: selectedFile.type,
        lastUpdated: selectedFile.lastModified,
    });
    formData.append("fileUpload.meta", fileUploadMeta);
    formData.append("fileUpload", selectedFile);
    const data = await fetch("http://localhost:4000/home/uploadImage", {
        method: "POST",
        body: formData,
    });
    console.log(data);
});
