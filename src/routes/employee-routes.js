const router = require("express").Router();
const { employee } = require("../controllers");

// GET ALL EMPLOYEE DATA localhost:8080/employee
router.get("/employee", employee.getEmployeeData);

// GET EMPLOYEE BY ID localhost:8080/employee/2
router.get("/employee/:id", employee.getEmployeeById);

// POST EMPLOYEE DATA localhost:8080/employee/add
router.post("/employee/add", employee.addEmployeeData);

// EDIT EMPLOYEE DATA BY ID localhost:8080/employee/2
router.post("/employee/edit", employee.editEmployeeData);

// DELETE EMPLOYEE DATA localhost:8080/employee/delete
router.post("/employee/delete/", employee.deleteEmployeeData);

module.exports = router;
