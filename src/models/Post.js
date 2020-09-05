const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    destacar: Boolean,
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
	timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);