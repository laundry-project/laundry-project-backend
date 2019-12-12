const Order = require("../../models/order");

module.exports = {
  addOrders: (req, res) => {
    Order.create(req.body)
      .then(result =>
        res.send({
          message: "Order created",
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
    Order.findOneAndUpdate({ _id: req.params.id }, req.body, 
      { new: true })
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
    Order.findByIdAndDelete ({ _id: req.params.id}
      // ,{rawResult: true}
    )
    .then(result => 
      res.send ({
        message: 'Order Delete',
        result
      })
      )
      .catch(error => {
        res.send ({
          message: 'Delete Order Failed',
          error: error.stack
        })
      })
  }
};
