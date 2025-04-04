const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_SVG = path.join(__dirname, '../public/FlirtAgent Icon.svg');
const APPLE_SVG = path.join(__dirname, '../public/Apple Favicon.svg');
const OUTPUT_DIR = path.join(__dirname, '../public');

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Define the sizes for the PNG favicons
const sizes = [16, 32, 192, 512];

// Generate PNG favicons
async function generatePNGFavicons() {
  try {
    // Read the SVG files
    const svgBuffer = fs.readFileSync(INPUT_SVG);
    const appleSvgBuffer = fs.readFileSync(APPLE_SVG);

    // Generate PNG favicons for each size
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(OUTPUT_DIR, `favicon-${size}x${size}.png`));
      
      console.log(`Generated favicon-${size}x${size}.png`);
    }

    // Generate Apple Touch Icon (180x180) using the Apple-specific favicon
    await sharp(appleSvgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    
    console.log('Generated apple-touch-icon.png');

    // Generate ICO file (using 16x16 and 32x32)
    // Note: Sharp doesn't directly support ICO, so we'll use the PNG files
    console.log('Note: For favicon.ico, you may need to use a dedicated ICO converter.');
    console.log('For now, you can use favicon-32x32.png as your main favicon.');

    console.log('Favicon generation completed successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Run the function
generatePNGFavicons();
