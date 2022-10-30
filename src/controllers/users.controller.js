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

export const signinUser = (req, res) => {
  try {
  } catch (error) {}
};

export const signupUser = (req, res) => {
  try {
    res.send("signup");
  } catch (error) {}
};

export const logoutUser = (req, res) => {
  try {
  } catch (error) {}
};
