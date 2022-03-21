const router = require("express").Router()
const { image } = require(".././../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/updateTransaction", image, async(req, res) => {
    const {
        user,
        _id,
        recipientName,
        recipientEmail,
        recipientPhone,
        transactionType,
        price,
        quantity,
        role,
        description,
        duration,
    } = req.body
    try {
        let transaction
        if (req.file) {
            transaction = await Transaction.updateOne({
                $and: [{ user }, { _id }],
            }, {
                $set: {
                    recipientName,
                    recipientEmail,
                    recipientPhone,
                    transactionType,
                    price,
                    quantity,
                    role,
                    description,
                    duration,
                    image: req.file.path,
                },
            }).exec()
            res.status(200).json({
                transaction,
                success: true,
                message: "Transaction successfully updated",
            })
        } else {
            transaction = await Transaction.updateOne({
                $and: [{ user }, { _id }],
            }, {
                $set: {
                    recipientName,
                    recipientEmail,
                    recipientPhone,
                    transactionType,
                    price,
                    quantity,
                    role,
                    description,
                    duration,
                },
            }).exec()
            res.status(200).json({
                transaction,
                success: true,
                message: "Transaction successfully updated",
            })
        }
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error updating transactions",
        })
    }
})

module.exports = router