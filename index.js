// Select all sections, sidebar links, and navbar links
const sections = document.querySelectorAll('section');
const sidebarLinks = document.querySelectorAll('.sidebar a');
const navbarLinks = document.querySelectorAll('.nav-links a');

// IntersectionObserver options
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

// IntersectionObserver to track active sections for sidebar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sidebarLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href').substring(1) === entry.target.id) {
          link.classList.add('active'); // Add active class to the link of the current section
        }
      });
    }
  });
}, options);

// IntersectionObserver to track active sections for navbar
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbarLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href').substring(1) === entry.target.id) {
          link.classList.add('active'); // Add active class to the link of the current section
        }
      });
    }
  });
}, options);

// Observe each section for both sidebar and navbar
sections.forEach(section => {
  observer.observe(section);
  observer1.observe(section);
});

// Smooth scrolling for sidebar links
sidebarLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    const href = link.getAttribute('href');

    // Allow default behavior for external links (e.g., resume)
    if (href && (href.includes('.pdf') || href.startsWith('http'))) {
      return;
    }

    event.preventDefault();
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Smooth scrolling for navbar links
navbarLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    const href = link.getAttribute('href');

    // Allow default behavior for external links (e.g., resume)
    if (href && (href.includes('.pdf') || href.startsWith('http'))) {
      return;
    }

    event.preventDefault();
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Sidebar show/hide functionality
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

document.querySelector('.explore-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the browser from scrolling to the top
  showSidebar(); // Open the sidebar
});
