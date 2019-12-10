const Service = require("../../models/services");

module.exports = {
  addServices: (req, res) => {
    Service.create(req.body)
      .then(result =>
        res.send({
          message: "service created",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "failed to add",
          error: error.stack
        })
      );
  },
  getServices: (req, res) => {
    Service.find()
      .then(result =>
        res.send({
          message: "All Services",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "error when get all service",
          error: error.stack
        })
      );
  },
  getServicesById: (req, res) => {
    Service.findById({ _id: req.params.id }).then(result=>
      res.send({
        message: "Service with the id",
        result
      })
    );
  }
};
