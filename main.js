// Simple mock data for destinations
const destinations = [
    {
        name: "Bali, Indonesia",
        location: "Indonesia",
        price: "$1200",
        rating: 4.8,
        info: "A tropical paradise with beautiful beaches, vibrant culture, and lush landscapes.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Kyoto, Japan",
        location: "Japan",
        price: "$1500",
        rating: 4.7,
        info: "Historic temples, cherry blossoms, and traditional tea houses await in Kyoto.",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Santorini, Greece",
        location: "Greece",
        price: "$1800",
        rating: 4.9,
        info: "Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    }
];

// Routing logic
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

// Book now button
function goToLogin() {
    showPage('login-page');
}

// Login form submit
function handleLogin(event) {
    event.preventDefault();
    showPage('destination-page');
    renderDestinations(destinations);
}

// Render destination recommendations
function renderDestinations(list) {
    const container = document.getElementById('recommendations');
    container.innerHTML = '';
    list.forEach((dest, idx) => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}" />
            <h3>${dest.name}</h3>
            <p>${dest.location}</p>
            <button onclick="showInfo(${idx})">View Info</button>
        `;
        container.appendChild(card);
    });
}

// Search bar
function handleSearch(event) {
    const value = event.target.value.toLowerCase();
    const filtered = destinations.filter(d => d.name.toLowerCase().includes(value) || d.location.toLowerCase().includes(value));
    renderDestinations(filtered);
}

// Show info page
function showInfo(idx) {
    const dest = destinations[idx];
    document.getElementById('info-name').textContent = dest.name;
    document.getElementById('info-location').textContent = dest.location;
    document.getElementById('info-price').textContent = dest.price;
    document.getElementById('info-rating').textContent = `Rating: ${dest.rating}`;
    document.getElementById('info-description').textContent = dest.info;
    document.getElementById('info-image').src = dest.image;
    showPage('info-page');
}

// Initial page
window.onload = function() {
    showPage('home-page');
    document.getElementById('login-form').onsubmit = handleLogin;
    document.getElementById('search-bar').oninput = handleSearch;
};
