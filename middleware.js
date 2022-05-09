const axios = require("axios");
const { getByName } = require("./controllers/matrix.controller");

const TEST_EMAIL = "rojan@mailinator.com";
const ADMIN_APP_API = "http://localhost:3040/api/v1/membership/current";

const getCurrentMembership = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${ADMIN_APP_API}?email=${TEST_EMAIL}`)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(err);
      });
  });
};

const membershipAuthenticate = (...resources) => {
  return async function (req, res, next) {
    try {
      // const current_user = req.tokenData;
      // const current_membership = await getCurrentMembership();
      const d = await getByName("Free"); // Current membership
      const access_resources = d.resources || [];
      // Validate resources
      const has_resource_access = checkPermissions(resources, access_resources);
      if (!has_resource_access) throw Error("Unauthorized access!");
      // Validate chains

      next();
    } catch (err) {
      next(err);
    }
  };
};

const checkPermissions = (access_required, access_resources) => {
  return access_required.some((v) => access_resources.indexOf(v) !== -1);
};

module.exports = { membershipAuthenticate };
