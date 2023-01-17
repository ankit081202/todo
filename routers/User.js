import express from "express";
import {
  register,
  verify,
  login,
  logout,
  addTask,
  updateTask,
  removeTask,
  updateProfile,
  updatePassword,
  forgetPassword,
  resetPassword,
  getMyProfile,
} from "../controllers/User.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/newtask").post(isAuthenticated, addTask);
router
  .route("/task/:taskId")
  .get(isAuthenticated, updateTask)
  .delete(isAuthenticated, removeTask);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);
router.route("/forgotpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);
router.route("/me").get(isAuthenticated, getMyProfile);
export default router;
