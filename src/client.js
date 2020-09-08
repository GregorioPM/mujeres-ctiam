const admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
var BusBoy = require("busboy");
const path = require("path");
const os = require("os");
const fs = require("fs");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "storage-api-824e6.appspot.com",
    databaseURL: "https://storage-api-824e6.firebaseio.com",
});

module.exports = {
    uploadImage(req, res, next) {
        var busboy = new BusBoy({ headers: req.headers });
        var json = {};

        // Use this to cache any fields which are file metadata.
        var fileMetas = {};
        let imageFileName;
        let imageTobeUploaded = {};
        busboy.on("file", function (
            fieldname,
            file,
            filename,
            encoding,
            mimetype
        ) {
            var meta = fileMetas[fieldname + ".meta"];
            const imageExtension = filename.split(".")[
                filename.split(".").length - 1
            ];
            imageFileName = `${Math.round(
                Math.random() * 100000000000
            )}.${imageExtension}`;
            const filepath = path.join(os.tmpdir(), imageFileName);
            imageTobeUploaded = { filepath, mimetype };
            file.pipe(fs.createWriteStream(filepath));
            console.log(filepath);
            if (!meta) {
                file.resume();
                return;
            }
            file.on("data", function (data) {
                console.log(`streamed ${data.length}`);
            });

            file.on("end", function () {
                console.log(`finished streaming ${filename}`);
            });
        });

        busboy.on("field", function (name, val) {
            console.log("4");
            if (/\.meta$/.test(name)) {
                fileMetas[name] = JSON.parse(val);
                console.log(`file metadata: name: ${name}, value: ${val}`);
                return;
            }
            console.log(`name: ${name}, value: ${val}`);
        });

        busboy.on("finish", function () {
            const bucket = admin.storage().bucket();
            bucket
                .upload(imageTobeUploaded.filepath, {
                    resumable: false,
                    metadata: {
                        metadata: {
                            contentType: imageTobeUploaded.mimeType,
                        },
                    },
                })
                .then(() => {
                    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${imageFileName}?alt=media`;
                    console.log(publicUrl);
                })
                .then(() => {
                    return res.json({ message: "Image Uploaded Successfully" });
                })
                .catch((err) => {
                    console.error(err);
                    return res.status(400).json({ error: err.code });
                });
        });

        req.pipe(busboy);
    },
};
