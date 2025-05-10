const db = require('../models');
const Product = db.Product;
const { cloudinary } = require('../cloudinary');

const productsController = {
    addProduct: async (req, res) => {
        try {
            const imageFile = req.file.path;
            const { product, price, type, desc } = req.body;

            const result = await cloudinary.uploader.upload(imageFile, {
                upload_preset: process.env.upload_preset || 'yqwywlyy' // Fallback preset
            });

            const newProduct = await Product.create({
                product,
                price,
                type,
                description: desc,
                url: result.secure_url
            });

            res.json({ ok: 1, message: newProduct });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    getProducts: async (req, res) => {
        try {
            const { type } = req.params;
            const products = await Product.findAll({
                where: { type },
                order: [['id', 'DESC']]
            });
            res.json({ ok: 1, message: products });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ where: { id } });
            
            if (!product) {
                return res.status(404).json({ ok: 0, message: 'Product not found' });
            }

            await product.destroy();
            res.json({ ok: 1, message: 'Product deleted successfully' });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const imageFile = req.file.path;
            const { product, price, type, desc } = req.body;

            const result = await cloudinary.uploader.upload(imageFile, {
                upload_preset: process.env.upload_preset || 'yqwywlyy'
            });

            const productToUpdate = await Product.findOne({ where: { id } });
            
            if (!productToUpdate) {
                return res.status(404).json({ ok: 0, message: 'Product not found' });
            }

            const updatedProduct = await productToUpdate.update({
                product,
                price,
                type,
                description: desc,
                url: result.secure_url
            });

            res.json({ ok: 1, message: updatedProduct });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    },

    updateProductText: async (req, res) => {
        try {
            const { id } = req.params;
            const { product, price, type, desc } = req.body;

            const productToUpdate = await Product.findOne({ where: { id } });
            
            if (!productToUpdate) {
                return res.status(404).json({ ok: 0, message: 'Product not found' });
            }

            const updatedProduct = await productToUpdate.update({
                product,
                price,
                type,
                description: desc
            });

            res.json({ ok: 1, message: updatedProduct });
        } catch (err) {
            res.status(500).json({ ok: 0, message: err.message });
        }
    }
}

module.exports = productsController;
