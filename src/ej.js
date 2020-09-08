module.exports = {
    uploadImage(req, res, next) {
        const busboy = new BusBoy({ headers: req.headers });

        let imageFileName;
        let imageTobeUploaded = {};
        busboy.on("file", (fieldname, file, filename, encoding, mimeType) => {
            const imageExtension = filename.split(".")[
                filename.split(".").length - 1
            ];
            //12345678900.png
            imageFileName = `${Math.round(
                Math.random() * 100000000000
            )}.${imageExtension}`;
            const filepath = path.join(os.tmpdir(), imageFileName);
            imageTobeUploaded = { filepath, mimeType };
            file.pipe(fs.createWriteStream(filepath));
        });
        busboy.on("field", function (name, val) {
            console.log("4");
            if (/\.meta$/.test(name)) {
                fileMetas[name] = JSON.parse(val);
                console.log(`file metadata: name: ${name}, value: ${val}`);
                return;
            }

            // Otherwise, process field as normal.
            console.log(`name: ${name}, value: ${val}`);
        });
        busboy.on("finish", () => {
            admin
                .storage()
                .bucket()
                .upload(imageTobeUploaded.filepath, {
                    resumable: false,
                    metadata: {
                        metadata: {
                            contentType: imageTobeUploaded.mimeType,
                        },
                    },
                })
                .then(() => {
                    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
                    // return db.doc(`/users/${req.user.handle}`).update({imageUrl});
                    console.log(imageUrl);
                })
                .then(() => {
                    return res.json({ message: "Image Uploaded Successfully" });
                })
                .catch((err) => {
                    console.error(err);
                    return res.status(400).json({ error: err.code });
                });
        });
        busboy.end(req.rawBody);
    },
};
