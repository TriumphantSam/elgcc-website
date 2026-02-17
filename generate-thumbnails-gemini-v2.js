const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBRtTkUUnIDRcLdy-4B0OlsDCFTLuQQqCc';
// Ensure we use the model name found in the list
const MODEL = 'imagen-3.0-generate-001';

async function tryGenerate(endpoint, payload, label) {
    console.log(`\n--- Testing ${label} ---`);
    console.log(`Endpoint: ${endpoint}`);
    console.log(`Payload: ${JSON.stringify(payload).substring(0, 100)}...`);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:${endpoint}?key=${API_KEY}`;

    return new Promise((resolve) => {
        const req = https.request(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => {
                console.log(`Status: ${res.statusCode}`);
                if (res.statusCode === 200) {
                    console.log('✅ SUCCESS!');
                    // Try to save
                    try {
                        const json = JSON.parse(body);
                        let b64 = null;
                        // Check various response formats
                        if (json.predictions?.[0]?.bytesBase64Encoded) b64 = json.predictions[0].bytesBase64Encoded;
                        else if (json.predictions?.[0]?.b64) b64 = json.predictions[0].b64;
                        else if (json.images?.[0]?.image) b64 = json.images[0].image; // generic

                        if (b64) {
                            const outFile = path.join(__dirname, 'public', 'images', 'sermons', '2026', `test-${label}.png`);
                            fs.writeFileSync(outFile, Buffer.from(b64, 'base64'));
                            console.log(`Saved to ${outFile}`);
                            resolve(true);
                        } else {
                            console.log('❌ No image data found in 200 response');
                            console.log(body.substring(0, 200));
                            resolve(false);
                        }
                    } catch (e) {
                        console.log('❌ Parse error');
                        resolve(false);
                    }
                } else {
                    console.log(`❌ FAILED`);
                    console.log(`Error Body: ${body.substring(0, 300)}`); // Show first 300 chars of error
                    resolve(false);
                }
            });
        });
        req.on('error', e => {
            console.log(`❌ Network Error: ${e.message}`);
            resolve(false);
        });
        req.write(JSON.stringify(payload));
        req.end();
    });
}

async function runTests() {
    const prompt = "A cinematic ancient door opening to light";

    // Test 1: predict with instances (Vertex style)
    await tryGenerate('predict', {
        instances: [{ prompt }]
    }, 'vertex-style');

    // Test 2: predict with simple prompt (AI Studio style?)
    await tryGenerate('predict', {
        prompt,
        n: 1,
        size: "1024x1024"
    }, 'simple-prompt');
}

runTests();
