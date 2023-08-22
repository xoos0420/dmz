const messages = [
  "안녕하세요!",
  "반갑습니다.",
  "어떤 도움이 필요하신가요?",
  "GPT처럼 한 글자씩 나오면서 스크롤이 자동으로 내려갑니다.",
  "스크롤을 아래로 내려보세요."
];

const chatBox = document.getElementById("chat-box");
const chatContainer = document.getElementById("chat-container");

function displayNextCharacter(messageIndex, charIndex) {
  if (messageIndex < messages.length) {
    const message = messages[messageIndex];
    if (charIndex < message.length) {
      const currentCharacter = message[charIndex];
      chatBox.innerHTML += currentCharacter;
      chatContainer.scrollTop = chatContainer.scrollHeight; // 스크롤을 아래로 내림
      setTimeout(() => {
        displayNextCharacter(messageIndex, charIndex + 1);
      }, 100); // 글자가 나타나는 간격 (ms)
    } else {
      chatBox.innerHTML += "<br>";
      setTimeout(() => {
        displayNextCharacter(messageIndex + 1, 0);
      }, 500); // 다음 메시지가 나타나는 간격 (ms)
    }
  }
}

displayNextCharacter(0, 0);