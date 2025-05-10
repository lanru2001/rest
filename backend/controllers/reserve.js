require('dotenv').config();
const db = require('../models');
const Reserve = db.Reservation;
const User = db.User;
const stripe = require('stripe')(process.env.REACT_STRIP_SK);
const uuid = require('uuid').v4;

const reserveController = {
    getReserve: async (req, res) => {
        try {
            const { date } = req.params;
            const bookings = await Reserve.findAll({
                where: { date },
                attributes: { exclude: ['username', 'createdAt', 'updatedAt', 'UserId'] },
                include: [{
                    model: User,
                    attributes: { exclude: ['id', 'username', 'password', 'createdAt', 'updatedAt'] },
                }],
                order: [['timeIndex', 'ASC']],
            });
            res.json({ ok: 1, message: bookings });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    createReserve: async (req, res) => {
        try {
            const { user, userId, firstname, lastname, mobile, num, dateChoosen, timeChoosen } = req.body;
            const newReservation = await Reserve.create({
                username: user,
                firstname,
                lastname,
                mobile,
                num,
                date: dateChoosen,
                timeIndex: timeChoosen,
                UserId: userId,
            });
            res.json({ ok: 1, message: newReservation });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    bookingFee: async (req, res) => {
        try {
            const { token, product } = req.body;
            const idempotencyKey = uuid();

            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            });

            const charge = await stripe.charges.create({
                amount: product.price * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email,
                description: product.name,
                shipping: {
                    name: token.card.name,
                    address: {
                        country: token.card.address_country,
                        line1: token.card.address_line1
                    }
                }
            }, { idempotencyKey });

            res.status(200).json(charge);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    getUserBooking: async (req, res) => {
        try {
            const { username } = req.params;
            const bookings = await Reserve.findAll({
                where: { username },
                order: [['id', 'DESC']],
            });
            res.json({ ok: 1, message: bookings });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    getUserInfo: async (req, res) => {
        try {
            const { username } = req.params;
            const user = await User.findOne({
                where: { username },
                attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
            });
            res.json({ ok: 1, message: user });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    updateMail: async (req, res) => {
        try {
            const { id } = req.params;
            const { email } = req.body;
            const user = await User.findOne({ where: { id } });
            
            if (!user) {
                return res.status(404).json({ ok: 0, message: 'User not found' });
            }

            const updatedUser = await user.update({ email });
            res.json({ ok: 1, message: updatedUser });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    isPaid: async (req, res) => {
        try {
            const { id } = req.params;
            const reservation = await Reserve.findOne({ where: { id } });
            
            if (!reservation) {
                return res.status(404).json({ ok: 0, message: 'Reservation not found' });
            }

            const updatedReservation = await reservation.update({ isPaid: 1 });
            res.json({ ok: 1, message: updatedReservation });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    cancelReserve: async (req, res) => {
        try {
            const { id } = req.params;
            const reservation = await Reserve.findOne({ where: { id } });
            
            if (!reservation) {
                return res.status(404).json({ ok: 0, message: 'Reservation not found' });
            }

            await reservation.destroy();
            res.json({ ok: 1, message: 'Reservation cancelled successfully' });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    updateReserve: async (req, res) => {
        try {
            const { id } = req.params;
            const { newDate, time, num } = req.body;
            const reservation = await Reserve.findOne({ where: { id } });
            
            if (!reservation) {
                return res.status(404).json({ ok: 0, message: 'Reservation not found' });
            }

            const updatedReservation = await reservation.update({
                num,
                date: newDate,
                timeIndex: time
            });
            res.json({ ok: 1, message: updatedReservation });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    }
};

module.exports = reserveController;
