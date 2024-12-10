const sections = document.querySelectorAll('section'); 
const sidebarLinks = document.querySelectorAll('.sidebar a'); 
const navbarLinks = document.querySelectorAll('.nav-links a');

const options = {
  root: null,
  rootMargin: '0px', 
  threshold: 0.3, 
};

// IntersectionObserver to track active sections
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

sections.forEach(section => {
  observer.observe(section); // Observe each section
});

sections.forEach(section => {
    observer1.observe(section); // Observe each section
  });

// Specific case for "Projects" section adjustment
const projectsSection = document.getElementById('projects'); // Get the Projects section
if (projectsSection) {
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sidebarLinks.forEach(link => {
          link.classList.remove('active'); // Remove active class from all links
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('active'); // Add active class to the link of the Projects section
          }
        });
      }
    });
  }, { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0.3 });

  // Observe the Projects section with a specific rootMargin adjustment to trigger correctly
  projectObserver.observe(projectsSection);
}

const projectSection = document.getElementById('projects'); // Get the Projects section
if (projectSection) {
  const projectObserver1 = new IntersectionObserver((entries1) => {
    entries1.forEach(entry1 => {
      if (entry1.isIntersecting) {
        navbarLinks.forEach(link1 => {
          link1.classList.remove('active'); // Remove active class from all links
          if (link1.getAttribute('href').substring(1) === entry1.target.id) {
            link1.classList.add('active'); // Add active class to the link of the Projects section
          }
        });
      }
    });
  }, { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0.3 });

  // Observe the Projects section with a specific rootMargin adjustment to trigger correctly
  projectObserver1.observe(projectSection);
}



// Smooth scrolling when clicking on the sidebar links
sidebarLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Remove 'active' class from all links first
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    link.classList.add('active');

    // Smoothly scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Aligns the section to the top of the viewport
    });
  });
});

navbarLinks.forEach(link1 => {
    link1.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      const targetId1 = link1.getAttribute('href').substring(1);
      const targetSection1 = document.getElementById(targetId1);
  
      // Remove 'active' class from all links first
      navbarLinks.forEach(link1 => {
        link1.classList.remove('active');
      });
  
      // Add 'active' class to the clicked link
      link1.classList.add('active');
  
      // Smoothly scroll to the target section
      targetSection1.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Aligns the section to the top of the viewport
      });
    });
  });

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