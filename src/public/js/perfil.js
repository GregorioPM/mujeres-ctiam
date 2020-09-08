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
    formData.append("fileUpload", selectedFile);
    const data = await fetch("http://localhost:4000/home/uploadImage", {
        method: "POST",
        body: formData,
    });
});
