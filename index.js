const app = require("./src/app");
const { connectDb } = require("./src/db/connectDb");

const port = 5000;

const main =()=>{
    connectDb();
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);
      });
}
main();
