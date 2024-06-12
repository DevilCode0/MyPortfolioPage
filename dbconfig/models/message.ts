import mongoose from 'mongoose';
const messageSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required']},
    email: {type: String, required: [true, 'Email is required']},
    subject: {type: String, required: [true, 'Subject is required']},
    body : {type: String, required: [true, 'Message is required']},

    createdAt: {type: Date, default: Date.now},
});


const message = mongoose.models.messages || mongoose.model('messages', messageSchema);

export default message;