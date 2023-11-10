import { Router } from 'express';
import { signup,signin } from '../controllers/authController.js';
const router = Router();
// Signup route
router.post('/signup', signup);
//signin route
router.post('/signin', signin);

export default router;