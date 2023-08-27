// JavaScript for the health bot functionality
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Function to add a message to the chat
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return; // Don't send empty messages

    addMessage(userMessage, "user");
    userInput.value = ""; // Clear the input field

    // You can add your health bot logic here to generate a bot response
    const botResponse = generateBotResponse(userMessage);
    addMessage(botResponse, "bot");
}

// Function to generate a bot response (placeholder)
function generateBotResponse(userMessage) {
    // Replace this with your actual health bot logic
    if (userMessage.includes("symptoms")) {
        return "It's important to consult with a healthcare professional for accurate diagnosis.";
    } else {
        return "I'm sorry, I don't have enough information to provide a specific answer.";
    }
}

// Event listener for the send button
sendButton.addEventListener("click", handleUserInput);

// Event listener for pressing Enter in the input field
userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
