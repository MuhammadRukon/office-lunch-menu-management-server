const app = require("./src/app");

const port = 5000;

const main =()=>{
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);
      });
}
main();
