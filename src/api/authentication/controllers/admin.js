const { pool } = require("../../../db/connectDb");

const admin = async (req, res) => {
  const { email } = req.body;
  try {
    // check if admin exists
    const checkAdminQuery = `SELECT * FROM users WHERE userrole = 'admin'`;
    const adminResult = await pool.query(checkAdminQuery);

    if (adminResult.rowCount > 0) {
      return res.json({status: 403, message:"An admin already exists. Contact admin to change manually"})
    }
    // Update the user's role to admin
    const updateUserRoleQuery = `UPDATE users SET userrole = 'admin' WHERE email = $1;`;
    const updateResult = await pool.query(updateUserRoleQuery, [email]);

    if (updateResult.rowCount === 1) {
      return res
        .status(200)
        .json({ success: true, message: "User role updated to admin" });
    }

    res
      .status(500)
      .json({ success: false, message: "Failed to update user role" });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

module.exports = admin;
