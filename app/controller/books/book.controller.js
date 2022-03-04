const bookService = require("../../service/book.service")

class Books {

    async create(req, res) {
        try {

            const result = await bookService.create(req.body)
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Book Has Been Created",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async get(req, res) {
        try {

            const result = await bookService.findOne({ _id: req.params.id })
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Book Has Been Fetched",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async gets(req, res) {
        try {

            const result = await bookService.find({})
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "All Book Has Been Fetched",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async delete(req, res) {
        try {

            const result = await bookService.findOneAndRemove({ _id: req.params.id })
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Role Book Been Deleted",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async update(req, res) {
        try {

            const result = await bookService.findOneAndUpdate({ _id: req.params.id }, req.body)
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Book Has Been Updated",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };
}

const rolesController = new Books();
module.exports = rolesController;