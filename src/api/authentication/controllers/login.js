const { pool } = require("../../../db/connectDb");

const login = async(req, res)=>{
    const {email, password} = req.body;
    const query = `SELECT * from users WHERE email = $1;`
    const value = [email];
    const response = await pool.query(query, value);
    if(response?.rows?.length){
        const data = (response.rows[0]);
        if(data.email === email && data.pass === password){
            const responseData = { userId: data.id, email: data.email, role: data.userrole, name: data.username, status: 200}
            res.send(responseData);
        }
        
    }else{
        res.json({ success: false, message: "User not found" });
        
    }
    
}

module.exports = login;