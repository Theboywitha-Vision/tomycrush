const envelope = document.getElementById('envelope');
const container = document.getElementById('container');

envelope.addEventListener('click', () => {
  // Hide the envelope
  envelope.style.display = 'none';

  // Show the container with animation
  container.classList.remove('hidden');
  setTimeout(() => {
    container.classList.add('visible');
  }, 10);
});

// No button logic
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

noButton.addEventListener('click', () => {
  // Create a new "Yes" button at a random position
  const newYesButton = document.createElement('button');
  newYesButton.textContent = 'Yes';
  newYesButton.style.position = 'absolute';
  newYesButton.style.left = `${Math.random() * 80 + 10}%`;
  newYesButton.style.top = `${Math.random() * 80 + 10}%`;
  newYesButton.style.backgroundColor = '#4caf50';
  newYesButton.style.color = 'white';
  newYesButton.style.border = 'none';
  newYesButton.style.borderRadius = '5px';
  newYesButton.style.padding = '10px 20px';
  newYesButton.style.cursor = 'pointer';

  // Add click event to the new "Yes" button
  newYesButton.addEventListener('click', () => {
    alert('Yay! You made the right choice! ❤️');
    container.innerHTML = '<h1>Happy Valentine\'s Day! ❤️</h1>';
  });

  // Append the new "Yes" button to the container
  container.appendChild(newYesButton);
});

yesButton.addEventListener('click', () => {
  alert('Yay! You made the right choice! ❤️');
  container.innerHTML = '<h1>Happy Valentine\'s Day! ❤️</h1>';
});
