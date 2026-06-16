const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src/assets');

async function compressImages() {
  const files = fs.readdirSync(assetsDir);
  console.log('Starting image compression...');

  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Process only jpg, jpeg, png images, skip hero files if we want, but let's compress all to save space
    if (['.jpg', '.jpeg', '.png'].includes(ext) && !file.includes('react.svg') && !file.includes('vite.svg')) {
      const stats = fs.statSync(filePath);
      const sizeMB = stats.size / (1024 * 1024);
      
      console.log(`Processing: ${file} (Original Size: ${sizeMB.toFixed(2)} MB)`);
      
      const tempPath = path.join(assetsDir, 'temp_' + file);
      
      try {
        let pipeline = sharp(filePath);
        
        // If image is very large in resolution, resize it to a maximum width of 1200px
        const metadata = await pipeline.metadata();
        if (metadata.width > 1200) {
          pipeline = pipeline.resize({ width: 1200 });
        }
        
        if (ext === '.jpg' || ext === '.jpeg') {
          await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
        } else if (ext === '.png') {
          await pipeline.png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
        }
        
        // Replace original with compressed version
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStats = fs.statSync(filePath);
        const newSizeKB = newStats.size / 1024;
        console.log(`✓ Compressed: ${file} -> New Size: ${newSizeKB.toFixed(2)} KB`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }
  }
  console.log('Image compression finished!');
}

compressImages();
