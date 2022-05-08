const MatrixModel = require("../models/matrix");

const create = (payload) => {
  let obj = new MatrixModel(payload);
  return obj.save();
};

const list = async () => {
  let users = await MatrixModel.find({});
  return users;
};

const getById = (id) => {
  return MatrixModel.findById(id);
};

const update = (id, payload) => {
  return MatrixModel.findOneAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true }
  );
};

module.exports = { create, list, getById, update };
