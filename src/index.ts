import cors from "cors";
import dotenv from "dotenv";
import express from 'express';
import router from "./router/todo.route";
import notFound from "./errors/notFound";
import errorHandlerMiddleware from "./middleware/errorHandler";
import sequelize from './utils/db'

// Load environment variables
dotenv.config();


// Create Express server
const app = express();


// Cors Setup
app.use(cors({
    origin: "*",
    methods: ['GET','POST','PUT','DELETE', 'PATCH']
}));


// Connecting Database
sequelize.sync()
.then(result=>{console.log("Database Connected")})
.catch(err=>{console.log(err);});


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());


//Router
app.use(router);


/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.info("  App is running at http://localhost:%d", app.get("port"));
    console.info("  Press CTRL-C to stop");
});


// Error handling
app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports = app