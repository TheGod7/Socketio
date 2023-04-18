import passport from "passport";

export const LoginRoutes = (req, res) => {
  res.render("pages/admin/login", {
    title: "Login",
    layout: "./layouts/login",
  });
};

export const PostLoginRoutes = passport.authenticate("local", {
  successRedirect: "/controller",
  failureFlash: true,
  failureRedirect: "/users/login",
});

export const Logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      req.flash("err", err);
      req.redirect("/users/login");
    }

    res.redirect("/");
  });
};
