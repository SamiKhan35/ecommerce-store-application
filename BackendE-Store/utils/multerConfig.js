const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, "Image");


    },
    filename: function (req, file, cb) {
        req.filename = `${Date.now()}-${file.originalname}`;

        // const uniqueSuffix = Date.now();
        // const extension = path.extname(file.originalname);
        // const filename = file.fieldname + '-' + uniqueSuffix + extension;
        cb(null, req.filename);


    }
});
const multerImage = multer({ storage });
module.exports = { multerImage }