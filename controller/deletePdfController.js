import PDF from "../models/pdfModel.js";

export const deletePdf = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const deletedPdf = await PDF.findByIdAndDelete({ _id: id });
        res.status(200).json(deletedPdf)
    } catch (error) {
        res.status(500).send({ msg: "Internal server error" })
    }
}