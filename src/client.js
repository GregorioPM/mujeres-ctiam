const admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "storage-api-824e6.appspot.com",
    databaseURL: "https://storage-api-824e6.firebaseio.com",
});

const bucket = admin.storage().bucket();

module.exports = {
    uploadImage(req, res, next) {
        try {
            if (!req.file) {
                res.status(400).send("Error, could not upload file");
                return;
            }
            const blob = bucket.file(req.file.originalname);
            const blobWriter = blob.createWriteStream({
                metadata: {
                    contentType: req.file.mimetype,
                },
            });
            blobWriter.on("error", (err) => next(err));
            blobWriter.on("finish", () => {
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
                    bucket.name
                }/o/${encodeURI(blob.name)}?alt=media`;
                res.status(200).send({
                    fileName: req.file.originalname,
                    fileLocation: publicUrl,
                });
            });
            blobWriter.end(req.file.buffer);
        } catch (error) {
            res.status(400).send(`Error, could not upload file: ${error}`);
            return;
        }
    },
};
