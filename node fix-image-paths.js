import fs from "fs";
import path from "path";

// مجلد المشروع اللي فيه كل ملفات JSX
const SRC_DIR = "./src";

// امشي جوه كل المجلدات وعدّل الملفات
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
      callback(fullPath);
    }
  });
}

// عدل كل مسارات الصور من ../src/assets/... → /images/...
walkDir(SRC_DIR, (filePath) => {
  let content = fs.readFileSync(filePath, "utf-8");
  const originalContent = content;

  // استبدال src="../src/assets/..." أو "/src/assets/..." أو "./src/assets/..."
  content = content.replace(
    /(["'`])\/images\//g,
    "$1./images/"
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✔️ Updated: ${filePath}`);
  }
});
