function sendMessage() {
    let input = document.getElementById("message");
    let chatArea = document.getElementById("chat-area");

    if (input.value === "") {
        return;
    }

    let msgDiv = document.createElement("div");
    msgDiv.className = "message";
    msgDiv.textContent = input.value;

    chatArea.appendChild(msgDiv);
    input.value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
}