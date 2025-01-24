import express from "express"
import { isAuthenticated, Login, Logout, register, resetPassword, sendResetOtp, sendVeifyOtp, verifyEmail } from "../controllers/authController.js";
import userAuth from '../middlewares/userAuth.js'

const authRouter = express.Router();

authRouter.post('/register',register);
authRouter.post('/login',Login);
authRouter.post('/logout',Logout);
authRouter.post('/send_verification_otp', userAuth, sendVeifyOtp);
authRouter.post('/verify_email',userAuth,verifyEmail);
authRouter.post('/is-auth',userAuth,isAuthenticated);
authRouter.post('/Sent_Reset_Otp',sendResetOtp);
authRouter.post('/reset_Password',resetPassword);






export default authRouter;