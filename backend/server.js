import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CREATE APP
const app = express();

// SERVE STATIC FILES FROM THE PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

// SERVE INDEX.HTML FOR ALL ROUTES
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'index.html'));
});

// PORT TO LISTEN TO
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});