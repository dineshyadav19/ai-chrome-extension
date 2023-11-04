// Create the button element
const button = document.createElement('button');
button.textContent = '';
button.id = 'myExtensionButton';

// Add a class to the button for styling
button.classList.add('siri-button');

// Create and append the dots for the animation
for (let i = 0; i < 3; i++) {
  const dot = document.createElement('div');
  dot.classList.add('voice-dot');
  button.appendChild(dot);
}

// Append the button to the body of the page
document.body.appendChild(button);
