import express from "express"
import { allStudents, findStudentById, createStudent, updateStudent, deleteStudent } from "../Controller/studentController.js"

const router = express.Router ()

router.get('/search/all',allStudents)
router.get('/search/:id',findStudentById)
router.post('/create',createStudent)
router.put('/update/:id',updateStudent)
router.delete('/delete/:id',deleteStudent)

export default router