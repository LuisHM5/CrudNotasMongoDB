export const renderIndex = (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.redirect("/notes");
  } else {
    res.render("index");
  }
};

export const renderAbout = (req, res) => {
  res.render("about");
};
