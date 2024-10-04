// public/customScript.js

function replaceDivContent() {
  console.log('here')
  alert('here')
  // Select the div using its ID
  // Select the div using its ID
  const customDiv = document.getElementById('customDiv');

  // Check if the div exists
  if (customDiv) {
    // Replace the content inside the div
    customDiv.innerHTML = '<strong>New Content</strong>: This content was dynamically replaced!';
  } else {
    console.log('Div not found!');
  }
}

// Automatically execute the function when the window finishes loading
window.onload = function() {
  console.log('here')
  alert(123)
  replaceDivContent();
};