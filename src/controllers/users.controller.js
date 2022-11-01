import User from "../models/User.js";
import passportLocal from "passport-local";
import passport from "passport";

//Render
export const renderSigninUserForm = (req, res) => {
  try {
    res.render("users/signinForm");
  } catch (error) {}
};
export const renderSignupUserForm = (req, res) => {
  try {
    res.render("users/signupForm");
  } catch (error) {}
};

//Crud

export const signupUser = async (req, res) => {
  try {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];

    if (password != confirm_password) {
      errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
      errors.push({ text: "Password must be at least 4 characters." });
    }
    if (errors.length > 0) {
      res.render("users/signupForm", { errors, name, email });
    } else {
      const emailUser = await User.findOne({ email });
      if (emailUser) {
        console.log("Same user");
        req.flash("error_msg", "The email is already in use.");
        console.log(req.locals);
        //res.render("users/signupForm", { errors, name });
        res.redirect("/users/signup");
      } else {
        const newUser = new User({ name, email, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash("success_msg", "You are Registered");
        res.redirect("/users/signin");
      }
    }
  } catch (error) {}
};

export const signinUser = passport.authenticate("login", {
  failureRedirect: "/users/signin",
  successRedirect: "/notes",
  failureFlash: true,
});

export const logoutUser = async (req, res) => {
  try {
    console.log("logout");
    await req.logout((err) => {
      if (err) {
        return next(err);
      }

      req.flash("success_msg", "Session cerrada");

      res.redirect("/");
    });
  } catch (error) {}
};
