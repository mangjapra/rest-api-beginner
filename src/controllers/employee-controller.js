const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  // GET ALL DATA EMPLOYEE
  getEmployeeData(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM employee_table;
                `,
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success get all data employee",
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  // GET EMPLOYEE DATA BY ID
  getEmployeeById(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM employee_table WHERE employee_id = ?;
                `,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success get employee data by id",
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  //   SAVE EMPLOYEE DATA
  addEmployeeData(req, res) {
    let data = {
      employee_name: req.body.name,
      employee_age: req.body.age,
      employee_address: req.body.address,
      employee_position: req.body.position,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            INSERT INTO employee_table SET ?;
            `,
        [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success save employee data",
          });
        }
      );
      connection.release();
    });
  },
  // UPDATE EMPLOYEE DATA
  editEmployeeData(req, res) {
    let dataEdit = {
      employee_name: req.body.name,
      employee_age: req.body.age,
      employee_address: req.body.address,
      employee_position: req.body.position,
    };
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            UPDATE employee_table SET ? WHERE employee_id = ?;
            `,
        [dataEdit, id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success edit employee data",
          });
        }
      );
      connection.release();
    });
  },
  // DELETE EMPLOYEE DATA BY ID
  deleteEmployeeData(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            DELETE FROM employee_table WHERE employee_id = ?;
            `,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success delete employee data",
          });
        }
      );
      connection.release();
    });
  },
};
