// Debounce function to limit API calls
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
// Fetch data from randomuser.me
async function fetchUserData(query) {
    if (!query) {
      document.getElementById('user-card').style.display = 'none';
      return;
    }
  
    try {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      const user = data.results[0];
  
      displayUserCard(user);
    } catch (error) {
      console.error('API Error:', error);
    }
  }

// Update DOM with user data
function displayUserCard(user) {
    const userCard = document.getElementById('user-card');
    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User Image" />
      <h2>${user.name.first} ${user.name.last}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    `;
    userCard.style.display = 'block';
  }

