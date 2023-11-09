import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ success: true, message: "Successfully registered" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

