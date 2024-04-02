function showMetrics() {
    // Simulate generating random metrics
    const minMass = 20;
    const mass = Math.floor(Math.random() * (100 - minMass + 1)) + minMass; // Generate random mass between 20 and 100 grams
    const volume = Math.floor(Math.random() * 100) + 1;

    // Display metrics
    document.body.innerHTML = `
        <div class="container">
            <h1>Plastic Waste Metrics</h1>
            <p>Mass: ${mass} g</p>
            <p>Volume: ${volume} cm<sup>3</sup></p>
            <a href="plasticType.html">Enter Plastic Type</a>
        </div>
    `;
}
