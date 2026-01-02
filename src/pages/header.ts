const header = document.createElement('header');
const container = document.createElement('div');
container.className = 'header-container';

const logo = document.createElement('div');
logo.className = 'logo';
logo.textContent = 'Stratus';

const nav = document.createElement('nav');
const ul = document.createElement('ul');

const links = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
];

links.forEach(linkData => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = linkData.text;
    a.href = linkData.href;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
container.appendChild(logo);
container.appendChild(nav);
header.appendChild(container);

export { header };