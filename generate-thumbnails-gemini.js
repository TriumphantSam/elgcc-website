const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'AIzaSyBRtTkUUnIDRcLdy-4B0OlsDCFTLuQQqCc';
// Try the Imagen 2 endpoint first as it's more widely available, or fall back to 3
const MODEL = 'image-generation-001'; // or 'imagen-3.0-generate-001'

async function generateImage(prompt, outputPath) {
    console.log(`Generating image for: "${prompt}"...`);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${API_KEY}`;

    // Payload for Imagen on Vertex/Gemini API often follows this structure
    const data = JSON.stringify({
        instances: [
            { prompt: prompt }
        ],
        parameters: {
            sampleCount: 1,
            aspectRatio: "16:9"
        }
    });

    return new Promise((resolve, reject) => {
        const req = https.request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }, (res) => {
            let responseBody = '';
            res.on('data', (chunk) => responseBody += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        const json = JSON.parse(responseBody);
                        // Response format might vary, checking standard Google API formats
                        // Usually: predictions[0].bytesBase64Encoded or similar

                        let base64Image = null;

                        if (json.predictions && json.predictions[0] && json.predictions[0].bytesBase64Encoded) {
                            base64Image = json.predictions[0].bytesBase64Encoded;
                        } else if (json.predictions && json.predictions[0] && json.predictions[0].b64) {
                            base64Image = json.predictions[0].b64;
                        }

                        if (base64Image) {
                            const buffer = Buffer.from(base64Image, 'base64');
                            fs.writeFileSync(outputPath, buffer);
                            console.log(`✅ Saved to ${outputPath}`);
                            resolve(outputPath);
                        } else {
                            console.error('❌ API Error: No image data found in response', JSON.stringify(json, null, 2));
                            reject(new Error('No image data'));
                        }
                    } catch (e) {
                        console.error('❌ Parse Error:', e);
                        console.log('Raw Body:', responseBody);
                        reject(e);
                    }
                } else {
                    console.error(`❌ HTTP Error: ${res.statusCode}`);
                    console.log('Body:', responseBody);
                    reject(new Error(`HTTP ${res.statusCode}`));
                }
            });
        });

        req.on('error', (e) => {
            console.error('❌ Request Error:', e);
            reject(e);
        });

        req.write(data);
        req.end();
    });
}

// Test with Open Doors
const outputDir = path.join(__dirname, 'public', 'images', 'sermons', '2026');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

generateImage(
    "A majestic open ancient door with golden light streaming through, cinematic lighting, photorealistic, 8k, divine atmosphere",
    path.join(outputDir, 'open-doors-gemini.png')
).catch(err => console.error("Failed:", err));
