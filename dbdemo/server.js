import dotenv from 'dotenv';
import { connectDB } from './config.js';
import app from './app.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server 
    running on port ${PORT}`));


    //how to check the path
    /**
     * 
     * 
     * dbdemo/routes/studentRoutes.js
     * dbdemo/controllers/studentController.js
     * 
     * 
     * import { createStudent, getStudents, getStudentById } from '../controllers/studentController.js';
     * 
     * 
     */