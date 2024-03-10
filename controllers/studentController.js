import { body, validationResult } from "express-validator";

async function getAllStudent(req, res) {
  res.status(200).json({
    message: "Get All Student Successfully",
    data: [
      {
        name: "duy huy",
        age: "18",
      },
      {
        name: "duy b",
        age: "23",
      },
      {
        name: "duy c",
        age: "20",
      },
    ],
  });
}

async function getStudentById(req, res) {}

async function insertStudent(req, res) {}

async function updateStudent(req, res) {}

export default {
  getAllStudent,
  getStudentById,
  insertStudent,
  updateStudent,
};
