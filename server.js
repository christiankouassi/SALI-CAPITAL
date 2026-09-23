import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

// Serve static assets from dist
app.use(express.static(DIST_DIR));

// Fallback to index.html for client-side SPA routing (or sub-pages like /salicommodities, /salidigicom, /foncieredassouli)
app.use((req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`SALI Capital server is running on http://0.0.0.0:${PORT}`);
});
