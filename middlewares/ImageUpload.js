var multer = require('multer');
var path = require('path');

function MyModelClass() {

    // this.ImageUpload = function (req, res, next) {
    this.storage = multer.diskStorage({
        destination: function (req, file, cb) {

            cb(null, req.body.image_path)
        },
        filename: function (req, file, cb) {
//            console.log(req.body, path.extname(file.originalname));
            cb(null, Date.now() + path.extname(file.originalname));
        }
    })
    this.uploadFile = multer({
        storage: this.storage,
        fileFilter: function (req, file, cb) {
//            if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//                //return cb(new Error('Only image files are allowed!'));
//
//                cb('Only image files are allowed!', false);
//            } else {
                cb(null, true);
//            }
            
        }
    }).any();
    // }


}

module.exports = new MyModelClass();