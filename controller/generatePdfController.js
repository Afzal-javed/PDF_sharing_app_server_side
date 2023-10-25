import PDF from "../models/pdfModel.js";
export const storePdf = async (req, res) => {
    try {
        const { id, name, data } = req.body;
        const pdfBytes = Buffer.from(data, 'base64');
        const genPdf = new PDF({ id, name, pdf: pdfBytes });
        await genPdf.save();
        return res.status(200).json([{ pdfId: genPdf._id, id: id, name: name, pdf: genPdf.pdf }]);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: 'Internal Server Error' });
    }
};