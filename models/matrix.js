const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: { type: String, unique: true },
    resources: { type: Array, required: true },
    supported_chains: { type: Array, required: true },
    limit: {
      nft_create: Number,
      upload_size: Number,
    },
  },
  {
    collection: "membership_matrix",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    toObject: {
      virtuals: true,
    },
    toJson: {
      virtuals: true,
    },
  }
);

module.exports = mongoose.model("MembershipMatrix", schema);
