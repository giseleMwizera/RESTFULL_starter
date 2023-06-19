const isAdmin = () => {
  return (req, res, next) => {
    console.log("Hereeeeeeee");
    console.log(req.roles);
    if (!req?.roles) {
      return res.status(401).send("Unauthorized");
    }
    if (!req.roles.includes("ADMIN")) {
      return res.status(403).send("Forbidden");
    }

    next(); // Call next to pass control to the next middleware or route handler
  };
};

module.exports = isAdmin;
