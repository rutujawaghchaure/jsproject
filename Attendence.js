// Model URL from your Teachable Machine project
const MODEL_URL = 'https://teachablemachine.withgoogle.com/models/6CvZoYjIO/';

let model, webcam, maxPredictions;
let lastRecordTime = 0;
const RECORD_INTERVAL = 5000; // Record attendance every 5 seconds

async function init() {
    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";

    try {
        // Load the model
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Setup webcam
        const flip = true; // Flip the webcam
        webcam = new tmImage.Webcam(640, 480, flip);
        await webcam.setup();
        await webcam.play();

        // Connect webcam to video element
        document.getElementById("webcam").srcObject = webcam.webcam.srcObject;

        // Start the prediction loop
        window.requestAnimationFrame(loop);

        // Update status
        document.getElementById("status").textContent = "System Ready";
    } catch (error) {
        document.getElementById("status").textContent = 
            "Error: Please check camera permissions";
        console.error("Initialization error:", error);
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    const statusDiv = document.getElementById("status");
    const confidenceDiv = document.getElementById("confidence");

    // Assuming "HANI" is class 0 in your model
    const presentProb = prediction[0].probability;
    const absentProb = 1 - presentProb;

    // Update status display
    if (presentProb > 0.8) {
        statusDiv.innerHTML = "<span class='present'>HANI IS PRESENT</span>";
        confidenceDiv.textContent = `Confidence: ${(presentProb * 100).toFixed(1)}%`;
    } else {
        statusDiv.innerHTML = "<span class='absent'>PERSON IS ABSENT</span>";
        confidenceDiv.textContent = `Confidence: ${(absentProb * 100).toFixed(1)}%`;
    }

    // Record attendance periodically
    const currentTime = Date.now();
    if (currentTime - lastRecordTime >= RECORD_INTERVAL) {
        recordAttendance(presentProb > 0.8, Math.max(presentProb, absentProb));
        lastRecordTime = currentTime;
    }
}

function recordAttendance(isPresent, confidence) {
    const table = document.getElementById("attendance-log").querySelector("tbody");
    const row = document.createElement("tr");
    const currentTime = new Date().toLocaleTimeString();

    row.innerHTML = `
        <td>${currentTime}</td>
        <td><span class="${isPresent ? 'present' : 'absent'}">${isPresent ? 'Present' : 'Absent'}</span></td>
        <td>${(confidence * 100).toFixed(1)}%</td>
    `;

    // Add new record at the top of the table
    table.insertBefore(row, table.firstChild);

    // Keep only the last 50 records
    while (table.children.length > 50) {
        table.removeChild(table.lastChild);
    }
}

// Initialize the system when page loads
window.addEventListener('load', init);
