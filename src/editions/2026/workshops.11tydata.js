import path from "path";
import { fileURLToPath } from "url";
import workshopsContent from "./workshops-content.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const year = path.basename(__dirname);

export default {
  workshops: workshopsContent.workshops,
  copy: workshopsContent,
  year,
};