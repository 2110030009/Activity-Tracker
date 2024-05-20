document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = 'login.html';
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:3000/activities', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const activityList = document.getElementById('activityList');
      response.data.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = `${activity.url} - ${activity.duration} seconds`;
        activityList.appendChild(li);
      });
    } catch (error) {
      console.error('Failed to fetch activities', error);
    }
  });
  