/* ============================================
   script.js — Public Portfolio Logic
   ============================================ */

// ─── Default Data ───────────────────────────
const DEFAULT_PROFILE = {
  name: 'Rendyka Surya Pangestu',
  tagline: 'Electrical Engineering',
  bio: 'tech enthusiast specializing in electrical engineering and control systems. Known for my hard-working nature and creative conceptualization, thrive in building automated solutions, from IoT monitoring to advanced hardware integrations.',
  photo: 'foto profile.jpg',
  cv: 'CV_Rendyka.pdf', // Ubah dengan nama file CV Anda
  email: 'rendycagur17@gmail.com',
  location: 'Semarang, Indonesia',
  linkedin: 'https://www.linkedin.com/in/rendyka-surya-b68206311?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  phone: '+62 85775083617',
  instagram: 'https://www.instagram.com/reendz_/',
  facebook: 'https://web.facebook.com/Rendyka.Surya.Pangestu.17',
  startYear: '2023'
};

const DEFAULT_EDUCATION = [
  {
    year: '2023 - 2026',
    title: 'D3 Electronics Engineering',
    institution: 'Politeknik Negeri Semarang',
    desc: 'Focusing on industrial automation, control systems, programmable logic controllers (PLC), embedded systems, and Internet of Things (IoT). Experienced in circuit design, sensor-actuator integration, electrical panel wiring, and developing automated hardware-software solutions.'
  },
  {
    year: '2020 - 2023',
    title: 'Computer Network Engineering',
    institution: 'SMK Bina Nusantara Ungaran',
    desc: 'Specialized in computer networking fundamentals, network infrastructure, Cisco routing & switching, server administration, and hardware troubleshooting. Built a solid technical foundation in network protocols, data communication, and system configurations that strongly support IoT and industrial automation integration.'
  }
];

const DEFAULT_EXPERIENCE = [
  { year: '2026 - 2026', title: 'Freelance', institution: 'PT. Sigma Global Innovation', desc: 'A freelancer at PT Sigma Global Innovation is responsible for designing and assembling electrical panels to support servo motor components and various sensors, as well as performing the wiring for an automation device used to extract substances from carica and kelor (moringa) leaves..' },
  { year: '2025 - 2025', title: 'Internship', institution: 'PT. Ruang Industri Indonesia', desc: 'Worked on PLC programming and industrial automation systems. Used Microsoft Visual Studio Code and Python for automation scripting. Gained hands-on experience with control systems and sensor integration.' },
  { year: '2021 - 2022', title: 'Internship', institution: 'Subdistrict Wringin Putih', desc: 'Performing administrative tasks, providing public services, and assisting with daily office operations. Primary activities include data input, managing population documents (KTP, KK, and birth certificates), assisting with public services, compiling activity reports, and assisting with sub-district-level events.' },
  //{ year: '2023', title: 'Freelance', institution: 'PT. Macroprima (Cimory)', desc: 'Freelance at PT. Macroprima (Cimory).' }
];

const DEFAULT_SKILLS = [
  { name: 'Microsoft Office & Microsoft Excel', description: 'Expert proficiency in Microsoft Office and Excel to streamline professional business workflows and transform raw data into actionable insights..', level: 80, icon: '⚡' },
  { name: 'PCB Designer (EasyEda)', description: 'Designing printed circuit boards (PCB) using EasyEda.', level: 80, icon: '📐' },
  { name: 'Cad Designer (Autodesk Inventor)', description: '3D CAD design using Autodesk Inventor.', level: 80, icon: '🖥️' },
  { name: 'Electical & Electronics Measure Tool', description: 'Use of electrical & electronics measurement tools.', level: 85, icon: '🔧' },
  { name: 'Internet Networking (Cisco)', description: 'Computer networking and Cisco configuration for simulation.', level: 80, icon: '🌐' },
  { name: 'PLC Programming (Haiwell & Omron)', description: 'Ladder logic programming, sensor/actuator interfacing, and industrial automation.', level: 60, icon: '🏭' },
  { name: 'IoT Systems & Microcontrollers (RaspberryPI & ESP32)', description: 'Developing connected IoT devices with MQTT, Wi-Fi, BLE, and sensor telemetry.', level: 70, icon: '📡' },
  { name: 'Python for Automation & Computer Vision', description: 'Python scripting for data logging, hardware control, and YOLO object detection.', level: 75, icon: '🐍' },
];

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Manually Guided Vehicle (MGV) based raspberry PI & PLC Haiwell',
    description: 'Prototype of a goods transport robot with joystick control and monitoring using a web server based on Raspberry PI and Haiwell PLC.',
    image: 'projek 1.jpg',
    images: ['projek 1.jpg', 'projek 15.jpg'],
    demoUrl: '#',
    repoUrl: '#',
    tags: ['HAIWELL', 'Bluetooth', 'raspberry PI', 'Web', 'IoT', 'joystick', 'Prototype']
  },
  {
    id: 2,
    title: 'Smart Tomato Sorting and Display System Using Yolov8 and IoT Based Rack Monitoring',
    description: 'This system is designed to sort tomatoes based on ripeness using Computer Vision (Yolov8). Sorted tomatoes are monitored based on their ripeness using IoT-based rack monitoring.',
    image: 'projek 16.jpg',
    images: ['projek 16.jpg', 'projek 22.jpg'],
    demoUrl: '#',
    repoUrl: '#',
    tags: ['Raspberry PI', 'Yolo V8', 'Tomatoes', 'Web', 'IoT']
  },
  {
    id: 3,
    title: 'Design of E-Money Toll Gate Prototype Using RFID Based on Arduino Uno',
    description: 'Automatic Toll Gate Prototype using Arduino Uno and RFID. This system is designed to replicate a toll gate system for balance top-up and payment using RFID and an LCD to display balance transaction information.',
    image: 'projek 3.jpg',
    images: ['projek 3.jpg', 'projek 17.jpg'],
    demoUrl: '#',
    repoUrl: '#',
    tags: ['RFID', 'Arduino Uno', 'E-Money', 'LCD', 'RFID Tag']
  },
  {
    id: 4,
    title: 'Design And Construction Of A Goods Transporting Robot Based On A Haiwell PLC With A Control System Integrated Remote Control Internet Of Things',
    description: 'Designed an IoT-based material handling robot controlled by a Haiwell PLC (AH1680T) and Raspberry Pi 4 via Modbus TCP/IP and a Flask web interface. Supports dual-mode operation (remote manual control & autonomous line following) with YOLOv8 vision detection and ArUco marker localization, achieving a 100% navigation success rate and 0.08 ms execution response.',
    image: 'projek 5.png',
    images: ['projek 5.png', 'projek 6.png', 'projek 14.png', 'projek 18.png', 'projek 19.png'],
    demoUrl: '#',
    repoUrl: '#',
    tags: ['Haiwell PLC', 'Raspberry Pi 4', 'YOLOv8', 'Modbus TCP/IP', 'Flask Web', 'IoT', 'Robotics']
  },
  {
    id: 5,
    title: 'Design and Construction of an Automatic Identification System Based on ESP Microcontroller, RFID, and I2C LCD with Firebase Realtime Database Integration',
    description: 'This automatic identification system is built on an ESP32 microcontroller, integrated with an RFID reader, I2C LCD display, and a Firebase Realtime Database. The system allows for the identification and storage of visitor data in real-time. The ESP32 manages the RFID tag scanning process, processes the data, and transmits it via Wi-Fi to the Firebase Realtime Database. The LCD displays real-time status information, such as “Data Saved Successfully” or “Card Not Recognized”.',
    image: 'projek 3.jpg',
    images: ['projek 3.jpg', 'projek 20.png'],
    demoUrl: '#',
    repoUrl: '#',
    tags: ['ESP32', 'IoT', 'RFID', 'I2C LCD', 'Firebase Realtime Database', 'Wi-Fi']
  },
  {
    id: 6,
    title: 'Design Of Salted Fish Dryer Based On Arduino Uno',
    description: 'This salted fish dryer is built on an Arduino Uno microcontroller, DHT22 temperature and humidity sensor, and a 16x2 LCD display. This system is designed to control the drying process of salted fish automatically based on time and temperature parameters.',
    image: 'projek 7.jpg',
    images: ['projek 7.jpg'],
    demoUrl: '#',
    repoUrl: '#',
    tags: ['Arduino Uno', 'DHT22', 'LCD', 'Salted Fish Dryer', 'Automatic Control']
  },
  {
    id: 7,
    title: 'Electronic Repair Technician',
    description: 'With >3 years of experience as an junior Electronics Repair Technician, I specialize in diagnosing, troubleshooting, and repairing a wide range of devices. My expertise covers mobile phones, laptops, audio systems, and embedded electronics circuits, refrigerator, fan, rice cooker, washing machine, dll. I am skilled in using, multimeters, and component-level analysis to restore functionality and performance.',
    image: 'projek 8.jpeg',
    images: ['projek 8.jpeg', 'projek 9.jpg', 'projek 10.jpg', 'projek 12.jpg', 'projek 13.jpg'],
    demoUrl: '#',
    repoUrl: '#',
    tags: ['Electronics Repair', 'Troubleshooting', 'Mobile Phone Repair', 'Embedded Systems', 'Component-Level Analysis']
  }
];

const TYPING_STRINGS = [
  'IoT Enthusiast',
  'Electronics Hobbyist',
  'Problem Solver',
  'Lifelong Learner'
];

// ─── Data Loading ───────────────────────────
// Untuk mengedit data portofolio, silakan ubah nilai pada DEFAULT_PROFILE, DEFAULT_SKILLS, dan DEFAULT_PROJECTS di atas.
function getProfile() {
  return DEFAULT_PROFILE;
}

function getSkills() {
  return DEFAULT_SKILLS;
}

function getProjects() {
  return DEFAULT_PROJECTS;
}

function getEducation() {
  return DEFAULT_EDUCATION;
}

function getExperience() {
  return DEFAULT_EXPERIENCE;
}

// ─── Render Functions ───────────────────────
function renderProfile() {
  const profile = getProfile();

  // Navbar logo
  const navLogo = document.getElementById('nav-logo');
  if (navLogo) navLogo.innerHTML = `${profile.name}<span class="logo-dot">.</span>`;

  // Hero
  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = profile.name;

  const heroBadge = document.getElementById('hero-badge-text');
  if (heroBadge) heroBadge.textContent = profile.tagline;

  const heroDesc = document.getElementById('hero-description');
  if (heroDesc) heroDesc.textContent = profile.bio;

  // Hero avatar
  const avatarWrapper = document.getElementById('hero-avatar-wrapper');
  if (avatarWrapper) {
    const existingImg = avatarWrapper.querySelector('.hero-avatar, .hero-avatar-placeholder');
    if (existingImg) existingImg.remove();

    if (profile.photo) {
      const img = document.createElement('img');
      img.src = profile.photo;
      img.alt = profile.name;
      img.className = 'hero-avatar';
      img.onerror = function () {
        this.replaceWith(createAvatarPlaceholder(profile.name));
      };
      avatarWrapper.insertBefore(img, avatarWrapper.querySelector('.hero-float-badge'));
    } else {
      const placeholder = createAvatarPlaceholder(profile.name);
      avatarWrapper.insertBefore(placeholder, avatarWrapper.querySelector('.hero-float-badge'));
    }
  }

  // CV Button
  const cvBtn = document.getElementById('hero-cv-btn');
  if (cvBtn) {
    if (profile.cv) {
      cvBtn.href = profile.cv;
      cvBtn.style.display = 'inline-flex';
    } else {
      cvBtn.style.display = 'none';
    }
  }

  // About
  const aboutText = document.getElementById('about-text');
  if (aboutText) aboutText.textContent = profile.bio;

  const aboutEmail = document.getElementById('about-email');
  if (aboutEmail) aboutEmail.textContent = profile.email;

  const aboutLocation = document.getElementById('about-location');
  if (aboutLocation) aboutLocation.textContent = profile.location;

  // About image
  const aboutImgContainer = document.getElementById('about-image-container');
  if (aboutImgContainer) {
    if (profile.photo) {
      aboutImgContainer.innerHTML = `<img src="${profile.photo}" alt="${profile.name}" class="about-img" onerror="this.parentElement.innerHTML='<div class=\\'about-img-placeholder\\'>📸</div>'">`;
    } else {
      aboutImgContainer.innerHTML = '<div class="about-img-placeholder">📸</div>';
    }
  }

  // Contact
  const contactEmail = document.getElementById('contact-email');
  if (contactEmail) contactEmail.textContent = profile.email;

  const contactLocation = document.getElementById('contact-location');
  if (contactLocation) contactLocation.textContent = profile.location;

  const contactPhone = document.getElementById('contact-phone');
  if (contactPhone) {
    contactPhone.textContent = profile.phone;
    if (profile.phone) {
      const waNumber = profile.phone.replace(/\D/g, '');
      contactPhone.href = `https://wa.me/${waNumber}`;
    } else {
      contactPhone.href = '#';
    }
  }

  const contactLinkedin = document.getElementById('contact-linkedin');
  if (contactLinkedin) {
    contactLinkedin.href = profile.linkedin || '#';
    contactLinkedin.textContent = profile.linkedin ? 'View Profile' : 'Not set';
  }

  const contactInstagram = document.getElementById('contact-instagram');
  if (contactInstagram) {
    contactInstagram.href = profile.instagram || '#';
    contactInstagram.textContent = profile.instagram ? 'View Profile' : 'Not set';
  }

  // Footer
  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = profile.name;

  const footerLinkedin = document.getElementById('footer-linkedin');
  if (footerLinkedin) footerLinkedin.href = profile.linkedin || '#';
}

function createAvatarPlaceholder(name) {
  const div = document.createElement('div');
  div.className = 'hero-avatar-placeholder';
  div.textContent = name.charAt(0).toUpperCase();
  return div;
}

function renderSkills() {
  const skills = getSkills();
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  // Update stat
  const statSkills = document.getElementById('stat-skills');
  if (statSkills) statSkills.innerHTML = `${skills.length}<span class="accent">+</span>`;

  if (skills.length === 0) {
    grid.innerHTML = `
      <div class="no-projects">
        <div class="empty-icon">🛠️</div>
        <p>No skills added yet</p>
      </div>`;
    return;
  }

  grid.innerHTML = skills.map((skill, index) => `
    <div class="skill-card" style="transition-delay: ${index * 80}ms;">
      <div class="skill-icon">${skill.icon || '⚡'}</div>
      <h3 class="skill-name">${escapeHTML(skill.name)}</h3>
      <p class="skill-desc">${escapeHTML(skill.description || '')}</p>
      <div class="skill-bar">
        <div class="skill-bar-fill" style="--skill-level: ${skill.level || 50}%"></div>
      </div>
      <div class="skill-level-label">${skill.level || 50}%</div>
    </div>
  `).join('');
}

function renderEducation() {
  const education = getEducation();
  const timeline = document.getElementById('education-timeline');
  if (!timeline) return;

  if (education.length === 0) {
    timeline.innerHTML = '<p class="text-muted">No education data yet.</p>';
    return;
  }

  timeline.innerHTML = education.map((item, index) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${escapeHTML(item.year)}</div>
        <h3 class="timeline-title">${escapeHTML(item.title)}</h3>
        <div class="timeline-subtitle">${escapeHTML(item.institution)}</div>
        <p class="timeline-desc line-clamp">${escapeHTML(item.desc)}</p>
        <button class="read-more-btn" onclick="openDetailModal('education', ${index})">Read More</button>
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const experience = getExperience();
  const timeline = document.getElementById('work-timeline');
  if (!timeline) return;

  if (experience.length === 0) {
    timeline.innerHTML = '<p class="text-muted">No work experience data yet.</p>';
    return;
  }

  timeline.innerHTML = experience.map((item, index) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${escapeHTML(item.year)}</div>
        <h3 class="timeline-title">${escapeHTML(item.title)}</h3>
        <div class="timeline-subtitle">${escapeHTML(item.institution)}</div>
        <p class="timeline-desc line-clamp">${escapeHTML(item.desc)}</p>
        <button class="read-more-btn" onclick="openDetailModal('experience', ${index})">Read More</button>
      </div>
    </div>
  `).join('');
}

// ─── Project Slider Logic ───────────────────
let projectSliderStates = {};

function getProjectImages(project) {
  if (Array.isArray(project.images) && project.images.length > 0) {
    return project.images;
  }
  if (project.image) {
    return [project.image];
  }
  return [];
}

function initProjectSliders() {
  const projects = getProjects();
  projectSliderStates = {};

  projects.forEach((project, index) => {
    const images = getProjectImages(project);
    if (images.length > 1) {
      projectSliderStates[index] = {
        currentIndex: 0,
        total: images.length,
        intervalId: null
      };
      startProjectAutoSlide(index);
      initTouchSwipe(index);
    }
  });
}

function startProjectAutoSlide(index) {
  const state = projectSliderStates[index];
  if (!state || state.total <= 1) return;
  if (state.intervalId) clearInterval(state.intervalId);

  // Stagger intervals slightly so cards change smoothly and organically
  const delay = 3500 + (index % 4) * 600;
  state.intervalId = setInterval(() => {
    slideProject(index, 1, null, false);
  }, delay);
}

window.pauseProjectAutoSlide = function (index) {
  const state = projectSliderStates[index];
  if (state && state.intervalId) {
    clearInterval(state.intervalId);
    state.intervalId = null;
  }
};

window.resumeProjectAutoSlide = function (index) {
  startProjectAutoSlide(index);
};

function stopAllProjectAutoSlides() {
  Object.keys(projectSliderStates).forEach(index => {
    if (projectSliderStates[index]?.intervalId) {
      clearInterval(projectSliderStates[index].intervalId);
    }
  });
  projectSliderStates = {};
}

window.slideProject = function (projectIndex, direction, event, isManual = true) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const state = projectSliderStates[projectIndex];
  if (!state || state.total <= 1) return;

  const nextIndex = (state.currentIndex + direction + state.total) % state.total;
  updateProjectSlide(projectIndex, nextIndex);

  if (isManual) {
    startProjectAutoSlide(projectIndex);
  }
};

window.goToProjectSlide = function (projectIndex, targetIndex, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const state = projectSliderStates[projectIndex];
  if (!state || targetIndex < 0 || targetIndex >= state.total) return;

  updateProjectSlide(projectIndex, targetIndex);
  startProjectAutoSlide(projectIndex);
};

function updateProjectSlide(projectIndex, newIndex) {
  const state = projectSliderStates[projectIndex];
  if (!state) return;

  state.currentIndex = newIndex;
  const track = document.getElementById(`project-track-${projectIndex}`);
  if (track) {
    track.style.transform = `translateX(-${newIndex * 100}%)`;
  }

  const counter = document.getElementById(`project-counter-${projectIndex}`);
  if (counter) {
    counter.textContent = `${newIndex + 1}/${state.total}`;
  }

  const dotsContainer = document.getElementById(`project-dots-${projectIndex}`);
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === newIndex);
    });
  }
}

function initTouchSwipe(projectIndex) {
  const sliderEl = document.getElementById(`project-slider-${projectIndex}`);
  if (!sliderEl) return;

  let startX = 0;
  let endX = 0;

  sliderEl.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
    pauseProjectAutoSlide(projectIndex);
  }, { passive: true });

  sliderEl.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        slideProject(projectIndex, 1, null, true);
      } else {
        slideProject(projectIndex, -1, null, true);
      }
    } else {
      resumeProjectAutoSlide(projectIndex);
    }
  }, { passive: true });
}

function renderProjects() {
  const projects = getProjects();
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  stopAllProjectAutoSlides();

  // Update stat
  const statProjects = document.getElementById('stat-projects');
  if (statProjects) statProjects.innerHTML = `${projects.length}<span class="accent">+</span>`;

  if (projects.length === 0) {
    grid.innerHTML = `
      <div class="no-projects">
        <div class="empty-icon">📁</div>
        <h3>No projects yet</h3>
        <p>Projects will appear here after being added via the script.js file</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = projects.map((project, index) => {
    const images = getProjectImages(project);
    const hasMultiple = images.length > 1;

    return `
      <div class="project-card" style="transition-delay: ${index * 60}ms;" 
           onmouseenter="pauseProjectAutoSlide(${index})" 
           onmouseleave="resumeProjectAutoSlide(${index})">
        <div class="project-image">
          ${images.length === 0 ? `
            <div class="project-image-placeholder">🚀</div>
          ` : `
            <div class="project-slider" id="project-slider-${index}">
              <div class="project-slides-track" id="project-track-${index}">
                ${images.map(img => `
                  <div class="project-slide">
                    <img src="${escapeHTML(img)}" alt="${escapeHTML(project.title)}" onerror="this.parentElement.innerHTML='<div class=\\'project-image-placeholder\\'>🚀</div>'">
                  </div>
                `).join('')}
              </div>

              ${hasMultiple ? `
                <div class="slider-counter" id="project-counter-${index}">1/${images.length}</div>
                <button type="button" class="slider-btn prev-btn" onclick="slideProject(${index}, -1, event)" aria-label="Previous image">❮</button>
                <button type="button" class="slider-btn next-btn" onclick="slideProject(${index}, 1, event)" aria-label="Next image">❯</button>
                <div class="slider-dots" id="project-dots-${index}">
                  ${images.map((_, i) => `
                    <span class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToProjectSlide(${index}, ${i}, event)" title="Gambar ${i + 1}"></span>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `}
          
          <div class="project-overlay">
            <div class="project-links">
              ${project.demoUrl && project.demoUrl !== '#' ? `<a href="${escapeHTML(project.demoUrl)}" class="project-link" target="_blank" title="Live Demo">🔗</a>` : ''}
              ${project.repoUrl && project.repoUrl !== '#' ? `<a href="${escapeHTML(project.repoUrl)}" class="project-link" target="_blank" title="Repository">📁</a>` : ''}
            </div>
          </div>
        </div>
        
        <div class="project-info">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-desc line-clamp">${escapeHTML(project.description)}</p>
          <button class="read-more-btn" style="margin-bottom: 12px;" onclick="openDetailModal('project', ${index})">Read More</button>
          <div class="project-tags">
            ${(project.tags || []).map(tag => `<span class="project-tag">${escapeHTML(tag)}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  initProjectSliders();
}

// ─── Typing Animation ──────────────────────
function initTypingAnimation() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentString = '';

  function type() {
    currentString = TYPING_STRINGS[stringIndex];
    if (!isDeleting) {
      typingEl.textContent = currentString.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentString.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause before deleting
        return;
      }
      setTimeout(type, 80);
    } else {
      typingEl.textContent = currentString.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % TYPING_STRINGS.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, 40);
    }
  }

  setTimeout(type, 1000);
}

// ─── Scroll Effects ─────────────────────────
function initScrollEffects() {
  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        // Animate skill bars
        const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
          setTimeout(() => bar.classList.add('animated'), 300);
        });

        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ─── Mobile Menu ────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ─── Utility ────────────────────────────────
function escapeHTML(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ─── Modal Logic ────────────────────────────
window.openDetailModal = function (type, index) {
  let item = null;
  if (type === 'education') item = getEducation()[index];
  else if (type === 'experience') item = getExperience()[index];
  else if (type === 'project') item = getProjects()[index];

  if (!item) return;

  const modal = document.getElementById('detail-modal');
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');
  const body = document.getElementById('modal-body');

  title.textContent = item.title;
  subtitle.textContent = item.institution || (item.tags ? item.tags.join(' • ') : '');

  if (type === 'project') {
    const images = getProjectImages(item);
    let modalHTML = '';
    if (images.length > 0) {
      modalHTML += `<div class="modal-gallery">
        ${images.map(img => `<img src="${escapeHTML(img)}" alt="${escapeHTML(item.title)}" class="modal-img" onerror="this.style.display='none'">`).join('')}
      </div>`;
    }
    modalHTML += `<p class="modal-description" style="line-height: 1.8; margin-bottom: 16px;">${escapeHTML(item.description || item.desc)}</p>`;
    if (item.tags && item.tags.length > 0) {
      modalHTML += `<div class="modal-tags" style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px;">
        ${item.tags.map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join('')}
      </div>`;
    }
    if ((item.demoUrl && item.demoUrl !== '#') || (item.repoUrl && item.repoUrl !== '#')) {
      modalHTML += `<div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        ${item.demoUrl && item.demoUrl !== '#' ? `<a href="${escapeHTML(item.demoUrl)}" target="_blank" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;">🔗 Live Demo</a>` : ''}
        ${item.repoUrl && item.repoUrl !== '#' ? `<a href="${escapeHTML(item.repoUrl)}" target="_blank" class="btn btn-light" style="padding: 8px 16px; font-size: 0.85rem;">📁 Repository</a>` : ''}
      </div>`;
    }
    body.innerHTML = modalHTML;
  } else {
    body.innerHTML = `<p style="line-height: 1.8;">${escapeHTML(item.desc || item.description)}</p>`;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

document.addEventListener('DOMContentLoaded', () => {
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('detail-modal');

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

// ─── Initialize ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderEducation();
  renderExperience();
  renderSkills();
  renderProjects();
  initTypingAnimation();
  initScrollEffects();
  initMobileMenu();
});
