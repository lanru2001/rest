const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const usersController = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            
            // Hash the password
            const hash = await bcrypt.hash(password, saltRounds);
            
            // Create user without generating token
            const newUser = await User.create({
                username,
                email,
                password: hash
            });
            
            res.json({ 
                ok: 1, 
                message: 'User registered successfully',
                user: {
                    id: newUser.id,
                    username: newUser.username,
                    email: newUser.email
                }
            });
        } catch (err) {
            res.status(500).json({ 
                ok: 0, 
                message: 'Registration failed',
                error: err.message 
            });
        }
    },

    getMe: async (req, res) => {
        try {
            // Simplified version - you might want to implement session-based auth later
            const { username } = req.query; // or get from session if you implement sessions
            
            if (!username) {
                return res.status(401).json({ 
                    ok: 0, 
                    message: 'User not identified' 
                });
            }
            
            const user = await User.findOne({
                where: { username },
                attributes: ['id', 'username', 'email'] // Don't return password
            });
            
            if (!user) {
                return res.status(404).json({ 
                    ok: 0, 
                    message: 'User not found' 
                });
            }
            
            res.json({ 
                ok: 1, 
                user 
            });
        } catch (err) {
            res.status(500).json({ 
                ok: 0, 
                message: 'Error fetching user data',
                error: err.message 
            });
        }
    },

    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            
            const user = await User.findOne({
                where: { username }
            });
            
            if (!user) {
                return res.status(401).json({ 
                    ok: 0, 
                    message: 'Invalid credentials' 
                });
            }
            
            const passwordMatch = await bcrypt.compare(password, user.password);
            
            if (!passwordMatch) {
                return res.status(401).json({ 
                    ok: 0, 
                    message: 'Invalid credentials' 
                });
            }
            
            // Return user info without token
            res.json({
                ok: 1,
                message: 'Login successful',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
            });
        } catch (err) {
            res.status(500).json({ 
                ok: 0, 
                message: 'Login failed',
                error: err.message 
            });
        }
    }
};

module.exports = usersController;
