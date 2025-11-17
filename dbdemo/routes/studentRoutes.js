import express from 'express';
import { createStudent, getStudents,getStudentById,
    updateStudent,deleteStudent } from '../controllers/studentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createStudent); 
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);


export default router;

