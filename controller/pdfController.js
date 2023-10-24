import PDF from "../models/pdfModel.js";

export const pdfController = async (req, res) => {
    const { name, pdf, id } = req.body;
    const pdfBuffer = Buffer.from(pdf, 'base64');
    try {
        if (!pdf) {
            res.status(404).send({ msg: "Please select atleast one file" });
        } else {
            const newPdf = new PDF({
                id,
                name,
                pdf: pdfBuffer
            })
            await newPdf.save();
            return res.status(200).json(newPdf);
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
}

export const allData = async (req, res) => {
    try {
        const pdf = await PDF.find({});
        const allPdf = pdf.map((doc) => {
            return { allDocuments: { pdfId: doc?._id, id: doc?.id, name: doc.name, pdf: doc.pdf } }
        })
        return res.status(200).json(allPdf);
    } catch (error) {
        res.status(500).send({ msg: "Internal server error" });
    }
}

