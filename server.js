const app = require("./app");
const config = require("./app/config");

const PORT = config.app.port;
app.listenerCount(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});