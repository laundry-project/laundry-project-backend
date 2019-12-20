const nodemailer = require("nodemailer");

const Order = require("../../models/order");
const User = require("../../models/user");

module.exports = {
  addOrders: async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);

      const user = await User.findOneAndUpdate(
        { _id: newOrder.userId },
        { $push: { orders: newOrder._id } },
        { new: true }
      );

      let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
          user: "loundryproject@gmail.com",
          pass: "loundryKomodo11!"
        }
      });

      let message = {
        from: " 'Admin 👻' <loundryproject@gmail.com>",
        to: user.email,
        subject: "Order Confirmation",
        text: "Thank you, the booking has been booked, please pay later",
        html:
          "<h1>Thank you, the booking has been booked, please pay later</h1>"
      };

      await transporter.sendMail(message, err => {
        if (!err) {
          res.send({
            message: "Order created",
            newOrder,
            user
          });
        } else {
          throw new Error("Order Failed");
        }
      });
    } catch (error) {
      res.send({
        message: "failed to create order",
        error: error.stack
      });
    }
  },

  getOrders: (req, res) => {
    Order.find()
      .then(result =>
        res.send({
          message: "All Orders",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "error when get all orders",
          error: error.stack
        })
      );
  },
  getOrdersById: (req, res) => {
    Order.findById({ _id: req.params.id })
      .then(result =>
        res.send({
          message: "Orders with the id",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "Error when update orders",
          error: error.message
        })
      );
  },
  updateOrdersById: (req, res) => {
    Order.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(result =>
        res.send({
          message: "All Orders Update",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "Error when update orders",
          error: error.stack
        })
      );
  },
  deleteOrdersById: (req, res) => {
    Order.findByIdAndDelete(
      { _id: req.params.id }
      // ,{rawResult: true}
    )
      .then(result =>
        res.send({
          message: "Order Delete",
          result
        })
      )
      .catch(error => {
        res.send({
          message: "Delete Order Failed",
          error: error.stack
        });
      });
  }
};
