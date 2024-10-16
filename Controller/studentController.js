import connectDb from "../utils/db.js";

export const allStudents = async (req, res) => {
    try {
        const result = await connectDb.query('SELECT * FROM school;');
        res.json(result.rows); 
    } catch (error) {
        console.error('Error retrieving students:', error);
        res.status(500).send('Internal Server Error');
    }
}


export const findStudentById = async (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    try {
        const result = await connectDb.query('SELECT * FROM school WHERE id = $1;', [studentId]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]); 
        } else {
            res.status(404).send('Student not found'); 
        }
    } catch (error) {
        console.error('Error retrieving student:', error);
        res.status(500).send('Internal Server Error');
    }
}


export const createStudent = async (req, res) => {
    const { name, fees } = req.body;
    try {
        const result = await connectDb.query('INSERT INTO school (name, fees) VALUES ($1, $2) RETURNING *;', [name, fees]); 
        res.status(201).json(result.rows[0]); 
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const updateStudent = async (req, res) => {
    const studentId = parseInt(req.params.id, 10); 
    const { name, fees } = req.body;
    try {
        const result = await connectDb.query('UPDATE school SET name = $1, fees = $2 WHERE id = $3 RETURNING *;', [name, fees, studentId]); 
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]); 
        } else {
            res.status(404).send('Student not found'); 
        }
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).send('Internal Server Error');
    }
}


export const deleteStudent = async (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    try {
        const result = await connectDb.query('DELETE FROM school WHERE id = $1 RETURNING *;', [studentId]);
        if (result.rowCount > 0) { 
            res.status(200).send("Student deleted successfully")
        } else {
            res.status(404).send('Student not found'); 
        }
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).send('Internal Server Error');
    }
}
