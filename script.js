document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const eventsContainer = document.getElementById("eventsContainer");

  const events = [
    {
      title: "Music Fest 2025",
      date: "June 15, 2025 – 6:00 PM",
      location: "City Stadium, Downtown",
      description: "Experience live performances from top artists and an unforgettable night of music.",
      icon: "fa-music"
    },
    {
      title: "Foodie Fair",
      date: "June 22, 2025 – 11:00 AM",
      location: "Park Central",
      description: "Taste dishes from over 50 local restaurants and food trucks in one vibrant location.",
      icon: "fa-utensils"
    },
    {
      title: "Startup Pitch Night",
      date: "June 29, 2025 – 5:30 PM",
      location: "Innovation Hub",
      description: "Watch rising entrepreneurs pitch their ideas to investors and industry leaders.",
      icon: "fa-lightbulb"
    }
  ];

  function renderEvents(filteredEvents) {
    eventsContainer.innerHTML = "";
    filteredEvents.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3><i class="fas ${event.icon}"></i> ${event.title}</h3>
        <p class="event-date"><i class="far fa-clock"></i> ${event.date}</p>
        <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
        <p class="event-description">${event.description}</p>
        <button class="register-btn"><i class="fas fa-ticket-alt"></i> Register</button>
      `;
      eventsContainer.appendChild(card);
    });
  }

  // Initial render
  renderEvents(events);

  // Search filter
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(query)
    );
    renderEvents(filtered);
  });
});
