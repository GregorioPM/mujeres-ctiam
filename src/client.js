const admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
var BusBoy = require("busboy");
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
        var fileMetas = {};
        busboy.on("file", function (
            fieldname,
            file,
            filename,
            encoding,
            mimetype
        ) {
            var meta = fileMetas[fieldname + ".meta"];
            if (!meta) {
                file.resume();
                return;
            }
            file.on("data", function (data) {
                console.log(`streamed ${data.length}`);
            });

            file.on("end", function () {
                console.log(`finished streaming ${file}`);
            });
        });
        busboy.on("field", function (name, val) {
            if (/\.meta$/.test(name)) {
                fileMetas[name] = JSON.parse(val);
                console.log(`file metadata: name: ${name}, value: ${val}`);
                return;
            }
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
