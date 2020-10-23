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
    document.getElementById("spinner").style.display = "block";
    setTimeout(() => {
        document.getElementById("spinner").style.display = "none";
    }, 2000);
    areaFile.classList.remove("dragging-file");
    const selectedFile = e.dataTransfer.files[0];
    const task = uploadImage(selectedFile, "profileImages");
    const onProgress = (e) => {};
    const onError = (e) => {
        console.log(e);
    };
    const onComplete = async () => {
        const url = await task.snapshot.ref.getDownloadURL();
        Array.from(document.getElementsByClassName("profile-image")).forEach(
            (img) => {
                img.src = url;
            }
        );
        document.querySelector("#avatarUser").value = url;
    };
    task.on("state_changed", onProgress, onError, onComplete);
});
