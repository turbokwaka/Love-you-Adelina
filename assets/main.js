function animateButton(btn) {
    btn.classList.add('animate__tada');
    btn.textContent = "Відправлено!";
}

function resetButton(btn) {
    btn.classList.remove('animate__tada');
    btn.textContent = "Замовити повідомлення";
}

function sendMessage(messagePayload) {
    return fetch('/api/send-message', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: messagePayload})
    })
        .then(res => res.json())
        .then(data => console.log('Message sent:', data))
        .catch(err => console.error('Error:', err));
}

function showInputField() {
    if (checkbox.checked) {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
}

let isAnimating = false;
const btn = document.querySelector('[data-love-button]');
const checkbox = document.querySelector('[add-notice-checkbox]');
const input = document.querySelector('[add-notice-input]');
console.log(btn);
console.log(checkbox);
console.log(input);

showInputField();

checkbox.addEventListener('change', showInputField);

btn.addEventListener('click', async () => {
    if (isAnimating) return;

    isAnimating = true;

    animateButton(btn);

    await new Promise(res => setTimeout(res, 2000));
    resetButton(btn);
    
    if (checkbox.checked) {
        const message = input.value;
        console.log(message);
        await sendMessage(message);
    } else {
        await sendMessage();
    }

    isAnimating = false;
});
