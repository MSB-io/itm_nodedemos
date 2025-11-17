import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 16 },
  enrolled: { type: Boolean, default: false }
}, { timestamps: true });

export const Student = mongoose.model('Student', studentSchema);


