const isAutenticated = (req, res, next) => {
  if (req.isAutenticated) {
    return next();
  }
  req.flash("error_msg", "Not Authorized");
  res.redirect("/users/signin");
};

export default isAutenticated;
