import express from 'express';
import taskRoutes from './src/routes/taskRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));