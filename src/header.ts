const header = document.createElement('header');
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
header.appendChild(nav);

export { header };