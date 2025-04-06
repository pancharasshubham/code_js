console.log('Hello!');

// Create a circle element
const circle = document.createElement("div");
circle.style.width = "20px";
circle.style.height = "20px";
circle.style.borderRadius = "50%";
circle.style.position = "fixed";
circle.style.pointerEvents = "none";
circle.style.background = "#00ffcc";
circle.style.zIndex = "9999";
circle.style.transition = "transform 0.1s ease-out";
document.body.appendChild(circle);