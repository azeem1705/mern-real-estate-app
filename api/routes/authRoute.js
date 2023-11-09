import { Router } from 'express';
import { signup } from '../controllers/authController.js';
const router = Router();
// Signup route
router.post('/signup', signup);

export default router;