document.getElementById("btn").addEventListener("click", async () => {
  // Retrieve input values
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value, 10);

  // Clear previous output
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = "";

  // Validate input
  if (!text || isNaN(delay) || delay < 0) {
    outputDiv.innerText = "Please enter valid text and a positive delay.";
    return;
  }

  // Function to simulate delay using a promise
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    // Introduce delay
    await wait(delay);
    // Display output
    outputDiv.innerText = text;
  } catch (error) {
    console.error("An error occurred:", error);
    outputDiv.innerText = "An error occurred while processing your request.";
  }
});
