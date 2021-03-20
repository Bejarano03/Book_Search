const router = required("express").Router();
const booksController = require("../../controllers/bookscontroller");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove)

module.exports = router;