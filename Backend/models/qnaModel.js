const mongoose = require('mongoose');

const qnaSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
    }
}, { timestamps: true });

module.exports = mongoose.model('Qna', qnaSchema);