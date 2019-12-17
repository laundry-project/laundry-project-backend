const User = require("../../models/user");

module.exports = {
  addUsers: (req, res) => {
    User.create(req.body)
      .then(result =>
        res.status(200).send({
          message: "user created",
          result
        })
      )
      .catch(error =>
        res.status(400).send({
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

  updateUsers: (req, res) => {
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

  getUsers: (req, res) => {
    User.find()
      .populate("orders")
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
  logout: (req, res) => {
    return res.status(200).json({
      message: "logout successful",
      isLoggedIn: false
    });
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const existedUser = await User.findOne({ email: req.body.email });
      if (existedUser) {
        if (existedUser.password == password) {
          res.status(200).send({
            message: "login success",
            existedUser,
            isLoggedIn: true
          });
        } else {
          res.status(400).send({
            message: "wrong password"
          });
        }
      } else {
        res.status(404).send({
          message: "user not found"
        });
      }
    } catch {
      res.status(4000).send({
        message: "something wrong when login"
      });
    }

    // User.find({ email: req.body.email })
    //   .then(result => {
    //     console.log(result[0].password);
    //     if (result.password == req.body.password) {
    //       res.send({
    //         message: "All User",
    //         result
    //       });
    //     } else {
    //       res.status(400).send({
    //         message: "wrong password"
    //       });
    //     }
    //   })
    //   .catch(error =>
    //     res.send({
    //       message: "error when login",
    //       error: error.stack
    //     })
    //   );
  },

  getUserById: (req, res) => {
    User.findById({
      _id: req.params.id
    })
      .populate("orders","service amount")

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
  },
  deleteUsers: (req, res) => {
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
  register: async (req, res) => {
    try {
      const { name, email, password, telephone } = req.body;
      if (!name || !email || !password || !telephone) {
        return res.status(400).json({
          message: "body cannot be empty"
        });
      }
      const existedUser = await User.findOne({email});
      if (existedUser) {
        return res.status(409).json({
          message: "user already registered, please login"
        });
      }
      User.create({ name, email, password, telephone });
      res.status(200).json({
        message: "user successfully created",
        name,
        email
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in register route",
        error: error.message
      });
    }
  }
};
