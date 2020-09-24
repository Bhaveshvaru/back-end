const mongoose = require('mongoose');
const formSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Form', formSchema);
