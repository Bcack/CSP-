function takeMeasurement() {
  // Simulate loading screen
  document.body.innerHTML = "<div class='loading'>Loading...</div>";

  // Simulate measuring mass and volume
  const mass = Math.floor(Math.random() * 100) + 1; // Random mass between 1 and 100
  const volume = Math.floor(Math.random() * 100) + 1; // Random volume between 1 and 100

  // Redirect to measurement page after a short delay
  setTimeout(function() {
    window.location.href = "measurement.html";
  }, 2000); // 2 seconds delay
}

function calculateMetrics() {
  // Simulate calculating metrics
  const plasticType = document.getElementById("plasticType").value;

  // Redirect to products page
  window.location.href = "products.html";
}
