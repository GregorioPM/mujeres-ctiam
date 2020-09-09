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
    const task = uploadImage(selectedFile);
    const onProgress = (e) => {};
    const onError = (e) => {
        console.log(e);
    };
    const onComplete = async () => {
        const url = await task.snapshot.ref.getDownloadURL();
        document.getElementById("profileImage").src = url;
    };
    task.on("state_changed", onProgress, onError, onComplete);
});
