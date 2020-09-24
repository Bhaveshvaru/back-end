const Form = require('../models/form');
exports.createForm = (req, res, next) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  const newData = new Form(data);
  newData.save((data, error) => {
    if (error) {
      res.status(400).json({ error: error });
    }
    if (data) {
      res.status(200).json({ data });
    }
  });
};

exports.getForm = (req, res, next) => {
  Form.find().exec((error, data) => {
    if (error) {
      res.status(400).json({ error: error });
    }
    if (data) {
      res.status(200).json({ data });
    }
  });
};
