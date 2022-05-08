const router = require("express").Router();
const MatrixController = require("../controllers/matrix.controller");

const { membershipAuthenticate } = require("../middleware");
const { MEMBERSHIP } = require("../constants");

const { BUSINESS, ENTERPRISE } = MEMBERSHIP;

router.get("/", (req, res, next) => {
  MatrixController.listUsers().then((d) => {
    const data = {
      title: "Node Basic",
      message: "Welcome to million dollar app ;)",
      users: d,
    };
    res.render("index", data);
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/matrix/create", (req, res) => {
  let payload = req.body;
  MatrixController.create(payload)
    .then((d) => {
      res.status(200).send(d);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.get("/matrix/list", (req, res) => {
  MatrixController.list()
    .then((d) => {
      res.json(d);
    })
    .catch((e) => {
      res.status(500).send("Server error.");
    });
});

router.get("/matrix/:id", (req, res) => {
  MatrixController.getById(req.params.id)
    .then((d) => {
      if (!d) return res.status(404).send("Data does not exist");
      res.json(d);
    })
    .catch((e) => {
      res.status(500).send("Server error.");
    });
});

router.put("/matrix/:id", (req, res) => {
  const payload = req.body;
  MatrixController.update(req.params.id, payload)
    .then((d) => {
      if (!d) return res.status(500).send("Could not update data");
      res.status(200).send(d);
    })
    .catch((e) => {
      res.status(500).send("Server error.");
    });
});

router.get(
  "/matrix/business",
  membershipAuthenticate("Business"),
  (req, res, next) => {
    return { success: true };
  }
);

router.get("/enterprise", () => {});

module.exports = router;
