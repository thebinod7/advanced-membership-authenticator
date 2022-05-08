const MEMBERSHIP = {
  FREE: {
    RESOURCES: ["User Management", "NFT Management", "Collection Management"],
    SUPPORTED_CHAINS: [97],
    LIMIT: {
      NFT_CREATE: 5,
    },
  },
  BUSINESS: {
    RESOURCES: [
      "User Management",
      "NFT Management",
      "Collection Management",
      "Sales Data",
    ],
    SUPPORTED_CHAINS: [97, 80001],
    LIMIT: {
      NFT_CREATE: 10,
    },
  },
  ENTERPRISE: {
    RESOURCES: [
      "User Management",
      "NFT Management",
      "Collection Management",
      "Sales Data",
      "Unlockable Contents",
    ],
    SUPPORTED_CHAINS: [97, 80001, 1],
    LIMIT: {
      NFT_CREATE: 1000,
      UPLOAD_SIZE: 10, // MB
    },
  },
};

module.exports = { MEMBERSHIP };
