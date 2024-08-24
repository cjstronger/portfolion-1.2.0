exports.getHome = (req, res) => {
  res.render("home", {
    title: "Clint Strong",
  });
};
