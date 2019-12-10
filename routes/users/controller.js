const User = require("../../models/user");

module.exports = {
  addUser: (req, res) => {
    User.create(req.body)
      .then(result =>
        res.send({
          message: "user created",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "user failed to add",
          error: error.stack
        })
      );
  },
  deleteUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }, { rawResult: true })
      .then(result =>
        res.send({
          message: "user deleted",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "failed delete user",
          error: error.stack
        })
      );
  },

  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(result =>
        res.send({
          message: "user updated",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "failed update user",
          error: error.stack
        })
      );
  },

  getUser: (req, res) => {
    User.find()
      .then(result =>
        res.send({
          message: "All User",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "error when get all user",
          error: error.stack
        })
      );
  },

  getUserById: (req, res) => {
    User.findById({
      _id: req.params.id
    })
      .then(result =>
        res.send({
          message: "Your user with the ID",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "error when get user with ID",
          error: error.stact
        })
      );
  }
};
