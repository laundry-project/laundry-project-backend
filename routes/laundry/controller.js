const Laundry = require("../../models/laundry");

module.exports = {
  getLaundry: (req, res) => {
    Laundry.find({})
      .then(result => {
        res.status(200).send({
          message: "All Laundry Places",
          result
        });
      })
      .catch(error => {
        res.status(400).send({
          message: "All Laundry Places Not Found",
          error: error.message
        });
      });
  },

  addLaundry: (req, res) => {
    Laundry.create(req.body)
      .then(result => {
        res.status(201).send({
          message: "Laundry Places created",
          result
        });
      })
      .catch(error => {
        res.status(400).send({
          message: "Laundry Places Not Created",
          error: error.message
        });
      });
  }
};
