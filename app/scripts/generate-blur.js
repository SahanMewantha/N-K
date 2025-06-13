// scripts/generate-blur.js
import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";

const getBlurData = async () => {
  const filePath = path.join(process.cwd(), "public", "bac.jpg");
  const buffer = fs.readFileSync(filePath); // read the image as a buffer
  const { base64 } = await getPlaiceholder(buffer);
  console.log("Base64 Placeholder:\n", base64); // Copy this to your component
};

getBlurData();
