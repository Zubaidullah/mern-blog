import express from 'express';
import { userRoute } from '../controllers/user.controller.js';

const router = express.Router();


// create api routes
router.get("/test", userRoute) ;


export default router;
