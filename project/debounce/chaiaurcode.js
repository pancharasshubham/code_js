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

