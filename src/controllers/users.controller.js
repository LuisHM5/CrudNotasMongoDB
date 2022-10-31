import User from "../models/User.js";
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
      res.render("users/signupForm", { errors });
    } else {
      const passEncrypt = User.encryptPassword(password);
      const newUser = new User({ name, email, password: passEncrypt });
      await newUser.save();
      res.send("signup successfully");
    }
  } catch (error) {}
};

export const signinUser = (req, res) => {
  try {
  } catch (error) {}
};

export const logoutUser = (req, res) => {
  try {
  } catch (error) {}
};
