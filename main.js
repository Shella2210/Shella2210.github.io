const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('mobileOverlay');

function toggleMenu(){
	const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', isOpen); 
    menuToggle.textContent = isOpen ? '✕' : '☰';
}

function closeMenu(){
	sidebar.classList.remove('open');
	overlay.classList.remove('active');
	menuToggle.textContent = '☰';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

const contentData = {
            about: {
                title: "Hello, I'm Shella",
                subtitle: "Full-Stack Developer & Designer",
                body: "Welcome to my profile, where you can explore the unique features of this website! It is thoughtfully designed with interactive elements to give you the best exploration experience. From a fully responsive layout that automatically adapts to any screen size, to a dynamic navigation system that lets you switch content seamlessly without reloading the page. Click the navigation items on the left to see Javascript dynamically swap the content."
            },
            portfolio: {
                title: "My Portfolio",
                subtitle: "Recent Works & Projects",
                body: "Here you can feature screenshots or descriptions of your web development projects, case studies, or design assets. Try adding your own image grids or list elements here!"
            },
            services: {
                title: "What I Do",
                subtitle: "Services Tailored to Your Needs",
                body: "I offer clean UI/UX prototyping, frontend architecture building, backend API integrations, and search engine optimization (SEO) performance auditing."
            },
            contact: {
                title: "Get In Touch",
                subtitle: "Let's work together",
                body: "Feel free to drop me an email at contact@example.com or reach out via my social media links. Looking forward to hearing about your project!"
            }
        };

const navItems = document.querySelectorAll('.nav-item');
const titleEl = document.getElementById('content-title');
const subtitleEl = document.getElementById('content-subtitle');
const bodyEl = document.getElementById('content-body');

navItems.forEach(item=>{
	item.addEventListener('click',(e)=>{
		e.preventDefault();
		navItems.forEach(i=>i.classList.remove('active'));
		item.classList.add('active');
		const key = item.getAttribute('href').substring(1);
		if(contentData[key]){
			titleEl.textContent=contentData[key].title;
			subtitleEl.textContent=contentData[key].subtitle;
			bodyEl.textContent=contentData[key].body;
		}
		closeMenu();
	});
});
