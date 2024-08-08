import pool from "../db/index.js";

const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

const getParticularUser = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};
