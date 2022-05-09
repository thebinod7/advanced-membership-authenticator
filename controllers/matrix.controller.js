const MatrixModel = require("../models/matrix");

const create = (payload) => {
  try {
    let obj = new MatrixModel(payload);
    return obj.save();
  } catch (err) {
    console.log("ERR==>", err);
    throw err;
  }
};

const list = async () => {
  let users = await MatrixModel.find({});
  return users;
};

const getById = (id) => {
  return MatrixModel.findById(id);
};

const getByName = (name) => {
  return MatrixModel.findOne({ name });
};

const update = (id, payload) => {
  return MatrixModel.findOneAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true }
  );
};

module.exports = { create, list, getById, update, getByName };
