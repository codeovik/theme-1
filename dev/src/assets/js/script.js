// Varriables for client
const social = [
  { name: 'linkedin', link: 'https://linkedin.com' },
  { name: 'instagram', link: 'https://instagram.com' },
  { name: 'github', link: 'https://github.com' },
  { name: 'twitter', link: 'https://twitter.com' },
  { name: 'facebook', link: 'https://facebook.com' }
];

const stats = [ 
  { number: "20000+", label: "Our Project Complete" },
  { number: "20+", label: "Our Natural Products" },
  { number: "80+", label: "Clients Reviews" },
  { number: "700+", label: "Our Satisfied Clients" },
  { number: "5000+", label: "Happy Customers" },
  { number: "15+", label: "Award Winning Team" },
  { number: "300+", label: "Partners Worldwide" },
  { number: "120+", label: "Offices Around The World" }
];

const skill = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 95 },
  { name: 'JavaScript', percent: 60 },
  { name: 'React', percent: 45 },
  { name: 'Node.js', percent: 40 },
  { name: 'Python', percent: 69 },
  { name: 'PHP', percent: 30 },
  { name: 'Java', percent: 95 },
  { name: 'C++', percent: 72 },
  { name: 'Godot', percent: 60 }
];

const education = [
  { degree: "B.Sc in Computer Science", institution: "Dhaka University", year: "2018 – 2022", description: "Studied various aspects of computer science including algorithms, data structures, and software engineering." },
  { degree: "M.Sc in Software Engineering", institution: "Dhaka University", year: "2022 – 2024", description: "Focused on advanced software development methodologies and project management." },
  { degree: "Web Development Bootcamp", institution: "Online Course", year: "2023", description: "Completed a comprehensive bootcamp covering HTML, CSS, JavaScript, and modern web frameworks." }
];

const experience = [
  { position: "Frontend Developer", company: "Tech Solutions Ltd.", year: "2020 – 2022", description: "Developed responsive web applications using HTML, CSS, and JavaScript. Collaborated with designers to implement user-friendly interfaces." },
  { position: "Full Stack Developer", company: "Innovatech Inc.", year: "2022 – Present", description: "Worked on both frontend and backend development using React, Node.js, and MongoDB. Led a team of developers to deliver high-quality software solutions." },
  { position: "Freelance Web Developer", company: "Self-employed", year: "2018 – Present", description: "Provided web development services to various clients, focusing on custom website design and development." }
];

const portfolio = [
  {
    title: "Food delivery development",
    type: "App Development",
    imageLink: "./assets/images/food-delivery-app.png",
    description: "<strong>Introducing my Food Delivery Mobile App project!</strong><br><br><i>Designed to simplify the way people order food with a smooth, responsive, and intuitive interface.</i><br><br>This app includes real-time tracking, smart restaurant discovery, and seamless ordering — all in one place.<br><br><strong>Key Features:</strong><br><br>1. <i>Easy login, profile management, and secure authentication.</i><br>2. <i>Explore restaurants by category, rating, and distance filters.</i><br>3. <i>Quickly add items to cart, customize orders, and apply discount codes.</i><br>4. <i>Track your delivery on a live map with accurate ETA.</i><br>5. <i>Built with clean UI, responsive design, and performance-first architecture.</i><br><br><br><strong>This app bridges convenience and efficiency, using real-world technology to enhance daily life.</strong><br><br><i>Check out the source code and live preview to explore the full experience.</i>",
    videoLink: "https://www.youtube.com/embed/2qIH17dc7M8?si=xdYeeIKCCR8tI_YY",
    projectInfo: {
      projectType: "App Development",
      client: "Ovik Biswas",
      date: "12 February, 2024",
      cost: "$7,200",
      technology: "Figma and VS Code"
    }
  },
  {
    title: "Real-Time Chat Application",
    type: "App Development",
    imageLink: "./assets/images/chat-app.png",
    description: "<strong>Presenting my Real-Time Chat Application project!</strong><br><br><i>Built to offer instant communication between users with a clean, minimal UI and seamless messaging experience.</i><br><br>This app supports real-time conversations, online presence tracking, and multimedia sharing — all optimized for mobile and desktop.<br><br><strong>Key Features:</strong><br><br>1. <i>Instant login, user registration, and secure Firebase authentication.</i><br>2. <i>Real-time 1-to-1 and group messaging powered by WebSockets or Firebase Realtime DB.</i><br>3. <i>Send and receive images, emojis, and file attachments smoothly.</i><br>4. <i>Live typing indicators, message status (sent, delivered, seen), and online/offline detection.</i><br>5. <i>Responsive design with optimized performance for both Android and web platforms.</i><br><br><br><strong>This app showcases how modern communication tools can be fast, reliable, and beautifully designed.</strong><br><br><i>Explore the live demo and dive into the code to see it in action!</i>",
    videoLink: "https://www.youtube.com/embed/2VGnV4TZh5g?si=QzFzMJdojXk1s_Qb",
    projectInfo: {
    projectType: "App Development",
    client: "Ovik Biswas",
    date: "26 March, 2024",
    cost: "$6,800",
    duration: "10 Days",
    technology: "React Native, Firebase, and VS Code",
    platforms: "Android, iOS, and Web",
    teamSize: "Solo Project",
    role: "UI/UX Design, Frontend & Backend Development",
    repository: "https://github.com/ovikbiswas/chat-app",
    livePreview: "https://chat-app-demo.vercel.app"
    }
  },
  {
    title: "Smart Medical Appointment App",
    type: "App Development",
    imageLink: "./assets/images/medical-app.png",
    description: "<strong>Introducing my Smart Medical Appointment App!</strong><br><br><i>Designed to simplify doctor appointments, health tracking, and patient-doctor interaction with a user-friendly mobile interface.</i><br><br>This app streamlines healthcare by enabling real-time booking, medical history access, and smart notifications — all in one place.<br><br><strong>Key Features:</strong><br><br>1. <i>User-friendly registration, secure login, and patient profile setup.</i><br>2. <i>Search and filter doctors by specialty, availability, and ratings.</i><br>3. <i>Instant appointment booking with calendar sync and reminders.</i><br>4. <i>Upload & access prescriptions, test reports, and medical history.</i><br>5. <i>Emergency contact, live chat with doctors, and health tips section.</i><br><br><br><strong>This app empowers users to take control of their health in a modern and accessible way.</strong><br><br><i>Don’t forget to explore the live preview and source code for a complete walkthrough!</i>",
    videoLink: "https://www.youtube.com/embed/j5QgUcuQykk?si=T3vJGvnygkHU7Wx1",
    projectInfo: {
      projectType: "App Development",
      client: "Ovik Biswas",
      date: "4 May, 2024",
      cost: "$8,500",
      duration: "12 Days",
      technology: "Flutter, Firebase, and VS Code",
      platforms: "Android and iOS",
      teamSize: "Solo Project",
      role: "UI Design, Frontend Development, Firebase Integration",
      repository: "https://github.com/ovikbiswas/medical-app",
      livePreview: "https://medical-app-demo.vercel.app"
    }
  },
  {
    title: "Survival Zombie Shooter Game",
    type: "Game Development",
    imageLink: "./assets/images/zombie-game.png",
    description: "<strong>Enter the apocalyptic world of Survival Zombie Shooter!</strong><br><br><i>A fast-paced 2D shooter game where players fight endless waves of zombies using strategy, speed, and skill.</i><br><br>Built for intense gameplay with rich animations, sound effects, and level progression.<br><br><strong>Key Features:</strong><br><br>1. <i>Multiple zombie types with unique attack behaviors.</i><br>2. <i>Weapon upgrades, ammo pickups, and health kits.</i><br>3. <i>Day/night system and map-based level progression.</i><br>4. <i>Scoreboard and survival time tracking.</i><br>5. <i>Optimized for both desktop and mobile gameplay with controller support.</i><br><br><strong>Can you survive the horde?</strong><br><br><i>Play the live demo and explore the source code for full details.</i>",
    videoLink: "https://www.youtube.com/embed/3mMYK7T5L1c?si=UGXWfVx4bKZo9yF2",
    projectInfo: {
      projectType: "Game Development",
      client: "Personal Game Project",
      date: "10 April, 2024",
      cost: "Free Project",
      duration: "8 Days",
      technology: "Godot Engine, GDScript, Photoshop",
      platforms: "Web, Windows",
      teamSize: "Solo",
      role: "Game Design, Logic Scripting, Animation Integration",
      repository: "https://github.com/ovikbiswas/zombie-shooter",
      livePreview: "https://zombie-game-demo.vercel.app"
    }
  },
  {
    title: "Pixel Platformer Adventure",
    type: "Game Development",
    imageLink: "./assets/images/platformer-game.png",
    description: "<strong>Welcome to Pixel Platformer Adventure!</strong><br><br><i>A charming 2D side-scrolling game featuring classic jumping, running, and obstacle dodging in pixel-perfect style.</i><br><br>This game mixes retro visuals with modern smooth controls for a satisfying experience.<br><br><strong>Key Features:</strong><br><br>1. <i>Multiple levels with increasing difficulty and hidden rewards.</i><br>2. <i>Pixel art characters, background parallax, and smooth animations.</i><br>3. <i>Enemies with patrol AI and health mechanics.</i><br>4. <i>Checkpoints, coin collection, and level completion score.</i><br>5. <i>Responsive on keyboard and mobile touch support.</i><br><br><strong>Perfect blend of nostalgia and fun!</strong><br><br><i>Try the live demo and browse the full source on GitHub.</i>",
    videoLink: "https://www.youtube.com/embed/jGgFGXbwAfY?si=5aVQEj9IbEOfF8LI",
    projectInfo: {
      projectType: "Game Development",
      client: "Ovik Biswas",
      date: "18 May, 2024",
      cost: "$1,000",
      duration: "6 Days",
      technology: "Godot, Aseprite, GDScript",
      platforms: "Web, Android",
      teamSize: "Solo",
      role: "Game Art, Physics Programming, Level Design",
      repository: "https://github.com/ovikbiswas/platformer-game",
      livePreview: "https://platformer-demo.vercel.app"
    }
  },
  {
    title: "Street Duel – 2D Fighting Game",
    type: "Game Development",
    imageLink: "./assets/images/fight-game.png",
    description: "<strong>Introducing Street Duel – the ultimate 2D pixel-based fighting game!</strong><br><br><i>Inspired by classic arcade fighting games, this project features combo attacks, character selection, and dramatic fight animations.</i><br><br>Built with polished sprites and real-time input combat mechanics.<br><br><strong>Key Features:</strong><br><br>1. <i>2-player local battle mode with keyboard controls.</i><br>2. <i>Multiple fighters with unique abilities and special moves.</i><br>3. <i>Health bars, power charge meters, and win indicators.</i><br>4. <i>Dynamic background environments and soundtrack.</i><br>5. <i>Combo input system, knockout finish, and fluid animation timing.</i><br><br><strong>Show your skills in the arena!</strong><br><br><i>Play the demo and dive into the clean, modular game code.</i>",
    videoLink: "https://www.youtube.com/embed/6JhXb6bBpo4?si=xcMkZtvAKyAm6JP6",
    projectInfo: {
      projectType: "Game Development",
      client: "Self Project",
      date: "2 June, 2024",
      cost: "Free/Open Source",
      duration: "9 Days",
      technology: "Godot, GDScript, Piskel",
      platforms: "Web, Desktop",
      teamSize: "Solo",
      role: "Combat System, Character Design, Game Logic",
      repository: "https://github.com/ovikbiswas/fight-game",
      livePreview: "https://fight-game-demo.vercel.app"
    }
  }
];

const clientReviews = [
  {name:"Isabella Rossi", company:"Rossi Ventures", imageLink:"./assets/images/client-1.png", rating:5, review:"Absolutely professional from start to finish. He took our rough wireframes and transformed them into a fully polished, stunning website. Communication was clear and consistent throughout. I’d highly recommend him to anyone in need of top-quality web development."},
  {name:"Liam Carter", company:"TechNova Ltd.", imageLink:"./assets/images/client-2.png", rating:4, review:"Working with him was a smooth and pleasant experience. He always delivered work on time and offered practical suggestions that made the final product even better. His attention to detail and professionalism really stood out."},
  {name:"Ayesha Rahman", company:"Rahman Interiors", imageLink:"./assets/images/client-3.png", rating:5, review:"Our company website now looks sleek, modern, and highly functional thanks to his excellent design sense. He was responsive and easy to work with during the whole process. The outcome exceeded our expectations."},
  {name:"Carlos Mendez", company:"Mendez Solutions", imageLink:"./assets/images/client-4.png", rating:3, review:"Good work overall with a strong understanding of the project. There were a few delays in communication, but the end result was satisfying. He eventually delivered a solid and functional website."},
  {name:"Sophie Tan", company:"Tan Tech", imageLink:"./assets/images/client-5.png", rating:5, review:"He really knows his stuff and brings great ideas to the table. The attention to detail and care he gave to our project was impressive. We’re very happy with the outcome and his support throughout."},
  {name:"Noah Smith", company:"Smith & Co. Marketing", imageLink:"./assets/images/client-6.png", rating:4, review:"A solid and skilled developer who helped us optimize our landing page performance significantly. He worked efficiently and met the deadlines. I would definitely consider working with him again."},
  {name:"Mila Khatun", company:"Mila Fashion House", imageLink:"./assets/images/client-7.png", rating:5, review:"Outstanding work with a creative touch and fast turnaround time. The site is exactly what we needed — mobile-friendly, elegant, and easy to navigate. I’ll gladly work with him again."},
  {name:"Daniel Lee", company:"Lee Architecture", imageLink:"./assets/images/client-8.png", rating:4, review:"Very responsive and professional throughout the entire process. He took all of our feedback seriously and incorporated it well. The final design fit our brand identity perfectly."},
  {name:"Fatima Noor", company:"Noor Consulting", imageLink:"./assets/images/client-9.png", rating:5, review:"It was an amazing experience from start to finish. He was patient, flexible, and went above and beyond to deliver a website that exceeded our expectations. Highly recommended for any business."}
];

const faqData = [
  { question: "How can I place an order for a project?", answer: "You can send your project details through my contact form or email. I usually respond within 24 hours." },
  { question: "How long does it take to build a website?", answer: "A basic website typically takes 3–5 days. More complex or custom projects may take longer." },
  { question: "How do I make the payment?", answer: "You can pay via bKash, Nagad, Rocket, or bank transfer. International clients can use PayPal or Wise." },
  { question: "What types of projects do you work on?", answer: "I work on websites, dashboards, e-commerce platforms, portfolios, blogs, and custom web applications." },
  { question: "Will I get support after project delivery?", answer: "Yes, I offer free technical support for a limited period after delivery. Paid support plans are also available." }
];

const plans = [
  {
    title: "Basic",
    price: "$1200",
    badge: null,
    priceUnit: "/Month",
    description: "Description of the tier list will go here, copy should be concise and impactful.",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "24/7 Customer Support",
      "UI UX Design",
      "Life time support"
    ]
  },
  {
    title: "Standard",
    price: "$1900",
    badge: "Most Popular",
    priceUnit: "/Month",
    description: "Description of the tier list will go here, copy should be concise and impactful.",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "24/7 Customer Support",
      "24/7 Customer Support",
      "24/7 Customer Support",
      "24/7 Customer Support",
      "UI UX Design",
      "Life time support"
    ]
  },
  {
    title: "Premium",
    price: "$2700",
    badge: null,
    priceUnit: "/Month",
    description: "Description of the tier list will go here, copy should be concise and impactful.",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "24/7 Customer Support",
      "UI UX Design",
      "Life time support"
    ]
  }
];


// typewriter effect in hero section
var typed = new Typed('header div h2 span', {
  strings: ['Web Developer', 'Youtuber', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});


// Varriables for developer
let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
let cursor = document.querySelector("#cursor");
gsap.registerPlugin(ScrollTrigger);


// Dark Mode Toggle
const buttons = document.querySelectorAll('.theme-toggle')
const isSystemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches
const setDarkMode = (on) => {
  document.documentElement.classList.toggle('dark', on)
}
const updateButtonIcons = (theme) => {
  buttons.forEach(btn => {
    btn.innerHTML = theme === 'dark'
      ? '<svg class="scale-150 lg:scale-150 md:scale-200 fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px"><path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z"/></svg>'
      : '<svg class="scale-150 lg:scale-150 md:scale-200 fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>';
  });
};
let currentTheme = localStorage.getItem('theme')
const applyInitialTheme = () => {
  if (!currentTheme) {
    const systemDark = isSystemDark()
    setDarkMode(systemDark)
    updateButtonIcons(systemDark ? 'dark' : 'light')
  } else {
    setDarkMode(currentTheme === 'dark')
    updateButtonIcons(currentTheme)
  }
}
const handleToggle = () => {
  if (!currentTheme) {
    currentTheme = isSystemDark() ? 'light' : 'dark'
  } else {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark'
  }
  localStorage.setItem('theme', currentTheme)
  setDarkMode(currentTheme === 'dark')
  updateButtonIcons(currentTheme)
}
applyInitialTheme()
buttons.forEach(btn => {
  btn.addEventListener('click', handleToggle)
})


// faq section
faqData.forEach(e => {
  let card = document.createElement("div");
  card.className = "faq-item bg-lightbox dark:bg-darkbox lg:p-20 p-10 cursor-pointer border-2 lg:border-3 border-white/15 hover:border-primary rounded-lg lg:rounded-2xl transition-all";
  card.innerHTML = `
    <div class="flex justify-between items-center">
      <span class="lg:text-lg text-sm font-bold">${e.question}</span>
      <span class="icon text-2xl">+</span>
    </div>
    <div class="faq-answer overflow-hidden max-h-0 transition-all lg:text-base text-xs">${e.answer}</div>`;
  document.querySelector("#faq-container").appendChild(card);
});
const items = document.querySelectorAll('.faq-item');
items.forEach(e => {
  const icon = e.querySelector('.icon');
  e.addEventListener('click', () => {
    items.forEach(i => {
      if (i !== e) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      }
    });
    e.classList.toggle('active');
    icon.textContent = e.classList.contains('active') ? '−' : '+';
  });
});


// pricing section
plans.forEach(e => {
  const featureIcon = `<svg class="fill-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
  const btnClass = e.badge ? "btn-primary text-black" : "btn-secondary";
  const paddingClass = `p-20 lg:p-40 ${e.badge ? "pt-40" : ""}`;
  const article = document.createElement("article");
  article.className = `bg-lightbox dark:bg-darkbox ${paddingClass} rounded-lg lg:rounded-2xl border-2 lg:border-0 overflow-hidden border-white/15 hover:border-primary transition-all relative`;
  article.innerHTML = `
    ${e.badge ? `<p class="absolute top-0 bg-primary text-white right-0 text-sm lg:text-xl font-bold lg:px-20 px-15 py-5 lg:rounded-bl-2xl rounded-bl-lg">${e.badge}</p>` : ""}
    <h3 class="font-bold text-3xl">${e.title}</h3>
    <h4 class="text-primary text-5xl mt-10 mb-20 font-extrabold">${e.price}<span class="text-xl font-medium ml-3 text-black dark:text-white">${e.priceUnit}</span></h4>
    <p class="text-sm">${e.description}</p>
    <div class="h-2 lg:h-3 bg-white/15 w-full rounded-full my-10"></div>
    ${e.features.map(f => `<p class="flex mb-10 gap-10">${featureIcon}${f}</p>`).join("")}
    <a href="#contact" class="${btnClass} mt-30 w-max"><span></span><span>Get Started</span><span></span></a>`;
  document.getElementById("plans-container").appendChild(article);
});


// portfolio section
const modalContainer = document.createElement("div");
modalContainer.id = "portfolio-modal";
modalContainer.className = "fixed z-10 top-0 left-0 w-full h-full dark:bg-black/80 bg-white/80 overflow-y-auto hidden";
document.body.appendChild(modalContainer);
function openModal(e) {
  document.body.classList.add("overflow-y-hidden");
  let infoHTML = "";
  for (const key in e.projectInfo) {
    let label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    infoHTML += `
      <div class="flex gap-10">
        <p class="whitespace-nowrap md:text-xl text-xs opacity-80 font-myfont shrink-0">${label}:</p>
        <p class="font-bold md:font-semibold text-xs md:text-xl font-myfont">${e.projectInfo[key]}</p>
      </div>
    `;
  }
  modalContainer.innerHTML = `
    <div class="backdrop-blur-2xl w-9/10 lg:w-1200 p-10 lg:p-20 rounded-lg lg:rounded-2xl border-3 border-white/15 absolute top-0 left-1/2 transform -translate-x-1/2 my-40">
      <div class="flex justify-between">
        <h3 class="text-black dark:text-white md:text-5xl text-3xl font-bold">Portfolio Details</h3>
        <button id="portfolio-modal-close-btn" class="h-40 md:h-60 hover:rotate-90 hover:scale-90 transition-all aspect-square dark:bg-white/15 bg-black/15 rounded-full flex items-center justify-center cursor-pointer">
          <svg class="scale-100 md:scale-150 dark:fill-white fill-black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </button>
      </div>
      <img id="portfolio-image" src="${e.imageLink}" alt="portfolio: ${e.title}'s screenshot" class="rounded-lg lg:rounded-2xl w-full object-contain my-20">
      <div class="lg:grid lg:grid-cols-[5fr_3fr] gap-20">
        <div class="font-myfont">
          <h3 id="portfolio-title" class="text-black dark:text-white font-bold text-xl md:text-3xl lg:text-5xl">${e.title}</h3>
          <p id="portfolio-description" class="text-black dark:text-white text-xs md:text-lg lg:my-40 my-20">${e.description}</p>
          <iframe id="project-video" class="w-full aspect-16/9 rounded-lg lg:rounded-2xl" src="${e.videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
          <div id="project-info" class="bg-lightbox dark:bg-darkbox p-20 rounded-lg lg:rounded-2xl text-black dark:text-white flex flex-col gap-5 mt-20 lg:mt-0">
            <h3 class="text-center text-2xl lg:text-4xl font-bold">Project Information</h3>
            <div class="h-3 rounded-full bg-white/15 w-full"></div>
            <div class=""></div>${infoHTML}</div>
        </div>
      </div>
    </div>
  `;
  modalContainer.classList.remove("hidden");
  // Cursor into primary color
  document.querySelectorAll("#portfolio-modal-close-btn").forEach(e => {
    e.addEventListener("mouseenter", () => {
      gsap.killTweensOf(cursor);
      gsap.to(cursor, {
        height: 0,
        border: 0,
        duration: 0.3
      })
      gsap.to(cursor, {
        height: 70,
        backgroundColor: primaryColor + "99",
        duration: 0.3,
        delay: 0.3
      })
    })
    e.addEventListener("mouseleave", () => {
      gsap.killTweensOf(cursor);
      gsap.to(cursor, {
        height: 0,
        border: 0,
        duration: 0.3
      })
      gsap.to(cursor, {
        height: 50,
        border: 2,
        backgroundColor: "transparent",
        duration: 0.3,
        delay: 0.3
      })
    })
  });
}
portfolio.forEach((e) => {
  let card = document.createElement("article");
  card.innerHTML = `
    <div class="lg:p-20 p-10 rounded-lg lg:rounded-2xl bg-lightbox dark:bg-darkbox border-2 lg:border-3 border-white/5 cursor-pointer" id="portfolio-card-image-hover-cursor-change">
      <div class="overflow-hidden rounded-lg lg:rounded-2xl transition-all"><img src="${e.imageLink}" alt="portfolio: ${e.title}'s screenshot" class="hover:scale-105 transition-all"></div>
    </div>
    <div class="flex justify-between items-center p-10">
      <div class="flex flex-col">
        <h3 id="portfolio-card-icon" class="font-bold font-myfont text-lg lg:text-xl hover:text-primary transition-all cursor-pointer">${e.title}</h3>
        <p class="font-myfont text-sm lg:text-lg text-black/80 dark:text-white/80 transition-all">${e.type}</p>
      </div>
      <div id="portfolio-card-icon" class="bg-lightbox dark:bg-darkbox transition-all aspect-1/1 border-2 lg:border-3 border-white/5 hover:bg-primary hover:border-white/15 lg:h-60 h-50 rounded-lg lg:rounded-2xl flex items-center justify-center cursor-pointer group">
        <svg class="group-hover:rotate-45 group-hover:fill-black transition-all fill-black dark:fill-white scale-70 lg:scale-100" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
      </div>
    </div>
  `;
  document.querySelector("#portfolio-container").appendChild(card);
  card.addEventListener("click", () => openModal(e));
});
document.body.addEventListener("click", (event) => {
  if (event.target.closest("#portfolio-modal-close-btn")) {
    modalContainer.classList.add("hidden");
    document.body.classList.remove("overflow-y-hidden")
  }
});


//  social media section
social.forEach(e => {
  let card = document.createElement("div");
  card.innerHTML = `
    <a class="dark:bg-white/5 bg-black/5 dark:hover:bg-white/15 hover:bg-black/15 hover:scale-90 transition-all text-black dark:text-white aspect-square md:h-60 h-50 flex items-center justify-center rounded-full" href="${e.link}" target="_blank">
      <i class="fa-brands fa-${e.name} md:text-2xl text-xl"></i>
    </a>`;
  document.querySelector(".social-media-container").appendChild(card);
});


//  social Social media section in footer
social.forEach(e => {
  let card = document.createElement("div");
  card.innerHTML = `
    <a class="dark:bg-white/5 bg-black/5 dark:hover:bg-white/15 hover:bg-black/15 hover:scale-90 transition-all text-black dark:text-white aspect-square md:h-60 h-50 flex items-center justify-center rounded-full" href="${e.link}" target="_blank">
      <i class="fa-brands fa-${e.name} md:text-2xl text-xl"></i>
    </a>`;
  document.querySelector(".social-media-container-in-footer").appendChild(card);
});


//footer srction dynamic year
document.getElementById("year").textContent = new Date().getFullYear();


// clients testominals section
clientReviews.forEach(e => {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<svg class="lg:h-15 h-12 transition-all ${i <= e.rating ? "fill-primary" : "dark:fill-white/30 fill-black/30"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4
      l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5
      l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0
      287.9 0z"/></svg>`;
  }
  let card = document.createElement("div");
  card.className = "swiper-slide lg:rounded-2xl rounded-lg dark:bg-darkbox bg-lightbox transition-all p-20 lg:p-40 border-white/15 border-2 lg:border-2";
  card.innerHTML = `
    <div class="flex gap-10 items-center">
      <img src="${e.imageLink}" class="rounded-full lg:h-100 md:h-80 h-50" alt="client: ${e.name}'s image">
      <div class="">
        <h3 class="font-bold transition-all text-black dark:text-white text-xl md:text-2xl lg:text-4xl font-myfont">${e.name}</h3>
        <p class="text-base lg:text-xl transition-all font-myfont text-black/80 dark:text-white/80">${e.company}</p>
        <div class="flex lg:gap-3 transition-all gap-2">${stars}</div>
      </div>
    </div>
    <div class="flex gap-10 lg:gap-20 mt-10">
      <div class="">
        <svg class="fill-primary transition-all lg:h-50 h-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>
      </div>
      <p class="text-xs md:text-sm lg:text-lg transition-all font-myfont">${e.review}</p>
    </div>`;
  document.querySelector(".swiper-wrapper").appendChild(card);
});
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true
});


// background Cursor animation
gsap.to(".bgCursor", {
  rotate: 360,
  duration: 5,
  repeat: -1,
  ease: "linear",
})
document.addEventListener("mousemove", (e) => {
  gsap.to(".bgCursor", {
    x: e.clientX - 200,
    y: e.clientY - 200,
    duration: 2,
    ease: "power2.out"
  })
})


// cursor in default
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 2,
    ease: "back.out"
  })
})


// cursor style change into black or white color
document.querySelectorAll(".btn-primary, #portfolio-card-icon, #cv-modal .bg-primary").forEach(e => {
  e.addEventListener("mouseenter", () => {
    gsap.killTweensOf(cursor);
    gsap.to(cursor, {
      height: 0,
      border: 0,
      duration: 0.3
    })
    gsap.to(cursor, {
      height: 70,
      backgroundColor: "rgba(255, 255, 255, 0.50)",
      duration: 0.3,
      delay: 0.3
    })
  })
  e.addEventListener("mouseleave", () => {
    gsap.killTweensOf(cursor);
    gsap.to(cursor, {
      height: 0,
      border: 0,
      duration: 0.3
    })
    gsap.to(cursor, {
      height: 50,
      border: 2,
      backgroundColor: "transparent",
      duration: 0.3,
      delay: 0.3
    })
  })
})


// cursor style change into primary color
document.querySelectorAll(".btn-secondary, .social-media-container a, .logo, #closecv, .theme-toggle, nav ul li a, .gotop, #portfolio-modal-close-btn, .social-media-container-in-footer a, footer ul li a, .faq-item, input, textarea, #cv-modal .border-3, .swiper-slide, header div img").forEach(e => {
  e.addEventListener("mouseenter", () => {
    gsap.killTweensOf(cursor);
    gsap.to(cursor, {
      height: 0,
      border: 0,
      duration: 0.3
    })
    gsap.to(cursor, {
      height: 70,
      backgroundColor: primaryColor + "99",
      duration: 0.3,
      delay: 0.3
    })
  })
  e.addEventListener("mouseleave", () => {
    gsap.killTweensOf(cursor);
    gsap.to(cursor, {
      height: 0,
      border: 0,
      duration: 0.3
    })
    gsap.to(cursor, {
      height: 50,
      border: 2,
      backgroundColor: "transparent",
      duration: 0.3,
      delay: 0.3
    })
  })
});


// cursor style change into "view more" text
document.querySelectorAll("#portfolio-card-image-hover-cursor-change").forEach(e => {
  let viewMoreTimeout;
  e.addEventListener("mouseenter", () => {
    gsap.killTweensOf(cursor);
    gsap.to(cursor, {
      height: 0,
      border: 0,
      duration: 0.3
    })
    gsap.to(cursor, {
      height: 120,
      backgroundColor: primaryColor + "99",
      duration: 0.3,
      delay: 0.3
    })
    viewMoreTimeout = setTimeout(() => {
      cursor.innerHTML = "View More";
    }, 600);
  });
  e.addEventListener("mouseleave", () => {
    clearTimeout(viewMoreTimeout);
    cursor.innerHTML = "";
    gsap.killTweensOf(cursor);
    gsap.to(cursor, {
      height: 0,
      border: 0,
      duration: 0.3
    })
    gsap.to(cursor, {
      height: 50,
      border: 2,
      backgroundColor: "transparent",
      duration: 0.3,
      delay: 0.3
    });
  });
});


// open and close cv modal in hero section
document.querySelector("#opencv").addEventListener("click", () => {
  document.querySelector("#cv-modal").classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  gsap.fromTo("#cv-modal", {
    opacity: 0,
    scale: 0.5
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "back.out"
  });
});
document.querySelector("#closecv").addEventListener("click", () => {
  document.body.classList.remove("overflow-hidden");
  gsap.to("#cv-modal", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: "back.in",
    onComplete: () => {
      document.querySelector("#cv-modal").classList.add("hidden");
    }
  });
});


// milestone section
ScrollTrigger.create({
  trigger: "#static-big-card",
  once: true,
  onEnter: () => {
    setTimeout(() => {
      document.getElementById('static-big-card').innerText = 25;
    }, 200);
  }
});
stats.forEach((e, i) => {
  const section = document.querySelector(".stats-section");
  const hasPlus = e.number.includes('+');
  const cleanValue = e.number.replace('+', '').replace(/[^0-9]/g, '');
  const card = document.createElement("article");
  const id = `odometer-${i}`;
  card.className = "dark:bg-darkbox transition-all bg-lightbox text-black flex items-center justify-center flex-col rounded-lg lg:rounded-2xl p-20 lg:p-20 dark:text-white";
  card.innerHTML = `
    <h1 class="md:text-5xl font-bold text-3xl">
      <span id="${id}" class="odometer">0</span>${hasPlus ? '<span class="md:text-5xl pl-5 md:ml-0 font-normal transition-all lg:font-extrabold">+</span>' : ''}
    </h1>
    <p class="dark:text-white/80 md:text-xl text-black/80 mt-2 transition-all">${e.label}</p>
  `;
  section.appendChild(card);
  ScrollTrigger.create({
    trigger: card,
    once: true,
    onEnter: () => {
      setTimeout(() => {
        const odometerEl = document.getElementById(id);
        odometerEl.innerText = cleanValue;
      });
    }
  });
});


// navigation for 1024px or more width devices
const nav = document.querySelector("nav");
const headerDiv = document.querySelector("header div");
let isFixed = false;
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 250 && !isFixed) {
    nav.classList.remove("animate-hide");
    nav.classList.add("fixed", "top-0", "left-0", "w-full", "bg-white/50", "dark:bg-black/50", "animate-show", "backdrop-blur-2xl");
    headerDiv.classList.add("pt-80");
    isFixed = true;
  } 
  else if (scrollY <= 200 && isFixed) {
    nav.classList.remove("animate-show");
    nav.classList.add("animate-hide");
    setTimeout(() => {
      nav.classList.remove("fixed", "top-0", "left-0", "w-full", "animate-hide", "backdrop-blur-2xl", "dark:bg-black/50", "bg-white/50");
      headerDiv.classList.remove("pt-80");
    }, 400);
    isFixed = false;
  }
});


// skill section
skill.forEach(e => {
  let card = document.createElement("div");
  card.className = "w-full";
  card.innerHTML = `
    <div class="w-full bg-lightbox dark:bg-darkbox transition-all rounded-full p-3">
      <div class="skill-bar-inner block lg:h-8 h-5 bg-primary rounded-full relative w-0">
        <div class="absolute flex justify-between w-full bottom-5 lg:bottom-8">
          <p class="lg:text-xl text-sm font-myfont transition-all">${e.name}</p>
          <p class="lg:text-xl text-sm font-myfont transition-all">${e.percent}%</p>
        </div>
      </div>
    </div>`;
  document.querySelector(".skill-container").appendChild(card);
  gsap.fromTo(
    card.querySelector(".skill-bar-inner"),
    { width: "0%" }, {
      width: `${e.percent}%`,
      duration: 5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        toggleActions: "play none none none"
      }
    }
  );
});


// education section
education.forEach(e => {
  let card = document.createElement("div");
  card.className = "bg-lightbox dark:bg-darkbox rounded-lg lg:rounded-2xl p-20 lg:p-40";
  card.innerHTML = `
    <h2 class="lg:text-3xl text-xl font-extrabold transition-all">${e.degree}</h2>
    <div class="flex justify-between mb-10 opacity-70 lg:mb-15 font-medium text-white/80">
      <p class="lg:text-2xl text-lg transition-all text-black dark:text-white">${e.institution}</p>
      <p class="border-2 md:px-10 px-5 h-max rounded-full lg:text-lg text-xs transition-all text-black dark:text-white">${e.year}</p>
    </div>
    <p class="text-xs lg:text-sm transition-all">${e.description}</p>`;
  document.querySelector("#education-container").appendChild(card);
  // gsap.from(card, {
  //   opacity: 0,
  //   duration: 0.2,
  //   scrollTrigger: {
  //     trigger: card
  //   }
  // })
});


// exprience section
experience.forEach(e => {
  let card = document.createElement("div");
  card.className = "bg-lightbox dark:bg-darkbox rounded-lg lg:rounded-2xl p-20 lg:p-40";
  card.innerHTML = `
    <h2 class="lg:text-3xl text-xl font-extrabold transition-all">${e.position}</h2>
    <div class="flex justify-between font-medium mb-10 opacity-70 lg:mb-15 text-white/80 text-xl">
      <p class="lg:text-2xl text-lg transition-all text-black dark:text-white">${e.company}</p>
      <p class="border-2 md:px-10 px-5 h-max rounded-full lg:text-lg text-xs transition-all text-black dark:text-white">${e.year}</p>
    </div>
    <p class="text-xs lg:text-sm transition-all">${e.description}</p>`;
  document.querySelector("#exprience-container").appendChild(card);
  // gsap.from(card, {
  //   opacity: 0.2,
  //   delay: 0.1,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: card
  //   }
  // })
});


// form submit to redirect yourdomain.com/thanks.html page
document.querySelector("form").insertAdjacentHTML(
  "beforeend",
  `<input type="hidden" name="_next" value="${window.location.href}/thanks.html">`
);


// navigation for 1024px width less devices
let menuTL = gsap.timeline();
menuTL.to("#menuContainer", {
  opacity: 1,
  duration: 0.3
});
menuTL.to("#menu", {
  right: 0,
  duration: 0.3
})
menuTL.to("#menu button", {
  stagger: 0.3,
  duration: 0.2,
  opacity: 1,
})
menuTL.from("#menu ul li a", {
  stagger: 0.1,
  duration: 0.2,
  opacity: 0,
  x: 50,
})
menuTL.pause();
document.querySelector("#menuOpenBtn").addEventListener("click", () => {
  document.body.classList.add("overflow-hidden");
  menuTL.play();
});
document.querySelector("#menuCloseBtn").addEventListener("click", () => {
  document.body.classList.remove("overflow-hidden");
  menuTL.reverse();
});
document.querySelectorAll("#menu ul li a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      menuTL.reverse();
    }, 1000);
  });
});


// active nav for 1024px or more width devices
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  let foundActive = false;
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
      foundActive = true;
    }
  });
  if (!foundActive) {
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  }
});


// active nav for 1024px width less devices
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link-mobile');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  let foundActive = false;
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
      foundActive = true;
    }
  });
  if (!foundActive) {
    const homeLink = document.querySelector('.nav-link-mobile[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  }
});


// smooth scroll for navigation
function smoothScroll(target, duration) {
  const targetElement = document.getElementById(target);
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
document.querySelectorAll('.singlePageLink').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    smoothScroll(targetId, 700);
  });
});


// go top button
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.height = `${scrolled}%`;
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    goTop.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
    goTop.classList.remove("opacity-0", "translate-y-10", "pointer-events-none");
  } else {
    goTop.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    goTop.classList.add("opacity-0", "translate-y-10", "pointer-events-none");
  }
});