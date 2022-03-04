const roleService = require("../../service/role.service")

class Roles {

    async create(req, res) {
        try {

            const result = await roleService.create(req.body)
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Role Has Been Created",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async get(req, res) {
        try {

            const result = await roleService.findOne({ _id: req.params.id })
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Role Has Been Fetched",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async gets(req, res) {
        try {

            const result = await roleService.find({})
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "All Role Has Been Fetched",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async delete(req, res) {
        try {

            const result = await roleService.findOneAndRemove({ _id: req.params.id })
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Role Has Been Deleted",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };

    async update(req, res) {
        try {

            const result = await roleService.findOneAndUpdate({ _id: req.params.id }, req.body)
            console.log(req.body)
            res.status(200).send({
                status: 200,
                success: true,
                msg: "Role Has Been Updated",
                data: result,
            });
        } catch (error) {
            res.status(500).send({ success: false, msg: error.message });
        }
    };
}

const rolesController = new Roles();
module.exports = rolesController;