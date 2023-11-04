import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './common/routes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();
const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log(
        `⚡️[server]: Server is running at http://localhost:${
            process.env.PORT || 3000
        }`,
    );
});
