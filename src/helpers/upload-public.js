import multer from "multer"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicFolder = path.resolve( __dirname, "../public")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, publicFolder)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
})

const upload = multer({ storage: storage });

export default upload;