import express from 'express';
import routes from './src/routes/routes';


const app = express();
const port = 2456;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});