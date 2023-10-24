import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    pdf: {
        type: Buffer,
        required: true
    }
}, { timestamps: true })

const PDF = mongoose.model("PDF", pdfSchema);
export default PDF;