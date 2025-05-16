
const description_1 = document.getElementById('desc-txt-1');
const description_2 = document.getElementById('desc-txt-2');
const description_3 = document.getElementById('desc-txt-3');

const homeTab = document.getElementById('home-tab');
const aboutTab = document.getElementById('about-tab');
const servicesTab = document.getElementById('services-tab');
const projectTab = document.getElementById('project-tab');
const blogTab = document.getElementById('blog-tab');
const contactTab = document.getElementById('contact-tab');

let count = 0;
setInterval(() => {
    if (count == 0) {
        document.getElementById('desc-txt-1').innerText = 'We';
        document.getElementById('desc-txt-2').innerText = 'build';
        document.getElementById('desc-txt-3').innerText = 'home';
    }
    else if (count == 1) {
        description_1.innerText = 'your vision';
       description_2.innerText = 'is turned';
        description_3.innerText = 'into reality';
    }
    else {
        description_1.innerText = "world's";
       description_2.innerText = 'top';
        description_3.innerText = 'builders';
    }

    count++;
    if (count > 2) {
        count = 0;
    }

}, 5000);

homeTab.addEventListener('click', function() {
    homeTab.style.backgroundColor = 'rgb(141, 3, 3)';
    homeTab.style.color = 'white';
    aboutTab.style.backgroundColor = 'transparent';
    aboutTab.style.color = 'rgb(172, 171, 171)';
    servicesTab.style.backgroundColor = 'transparent';
    servicesTab.style.color = 'rgb(172, 171, 171)';
    projectTab.style.backgroundColor = 'transparent';
    projectTab.style.color = 'rgb(172, 171, 171)';
    blogTab.style.backgroundColor = 'transparent';
    blogTab.style.color = 'rgb(172, 171, 171)';
    contactTab.style.backgroundColor = 'transparent';
    contactTab.style.color = 'rgb(172, 171, 171)';
});

aboutTab.addEventListener('click', function() {
    aboutTab.style.backgroundColor = 'rgb(141, 3, 3)';
    aboutTab.style.color = 'white';
    homeTab.style.backgroundColor = 'transparent';
    homeTab.style.color = 'rgb(172, 171, 171)';
    servicesTab.style.backgroundColor = 'transparent';
    servicesTab.style.color = 'rgb(172, 171, 171)';
    projectTab.style.backgroundColor = 'transparent';
    projectTab.style.color = 'rgb(172, 171, 171)';
    blogTab.style.backgroundColor = 'transparent';
    blogTab.style.color = 'rgb(172, 171, 171)';
    contactTab.style.backgroundColor = 'transparent';
    contactTab.style.color = 'rgb(172, 171, 171)';
});

servicesTab.addEventListener('click', function() {
    servicesTab.style.backgroundColor = 'rgb(141, 3, 3)';
    servicesTab.style.color = 'white';
    homeTab.style.backgroundColor = 'transparent';
    homeTab.style.color = 'rgb(172, 171, 171)';
    aboutTab.style.backgroundColor = 'transparent';
    aboutTab.style.color = 'rgb(172, 171, 171)';
    projectTab.style.backgroundColor = 'transparent';
    projectTab.style.color = 'rgb(172, 171, 171)';
    blogTab.style.backgroundColor = 'transparent';
    blogTab.style.color = 'rgb(172, 171, 171)';
    contactTab.style.backgroundColor = 'transparent';
    contactTab.style.color = 'rgb(172, 171, 171)';
});

projectTab.addEventListener('click', function() {
    projectTab.style.backgroundColor = 'rgb(141, 3, 3)';
    projectTab.style.color = 'white';
    homeTab.style.backgroundColor = 'transparent';
    homeTab.style.color = 'rgb(172, 171, 171)';
    aboutTab.style.backgroundColor = 'transparent';
    aboutTab.style.color = 'rgb(172, 171, 171)';
    servicesTab.style.backgroundColor = 'transparent';
    servicesTab.style.color = 'rgb(172, 171, 171)';
    blogTab.style.backgroundColor = 'transparent';
    blogTab.style.color = 'rgb(172, 171, 171)';
    contactTab.style.backgroundColor = 'transparent';
    contactTab.style.color = 'rgb(172, 171, 171)';
});

blogTab.addEventListener('click', function() {
    blogTab.style.backgroundColor = 'rgb(141, 3, 3)';
    blogTab.style.color = 'white';
    homeTab.style.backgroundColor = 'transparent';
    homeTab.style.color = 'rgb(172, 171, 171)';
    aboutTab.style.backgroundColor = 'transparent';
    aboutTab.style.color = 'rgb(172, 171, 171)';
    servicesTab.style.backgroundColor = 'transparent';
    servicesTab.style.color = 'rgb(172, 171, 171)';
    projectTab.style.backgroundColor = 'transparent';
    projectTab.style.color = 'rgb(172, 171, 171)';
    contactTab.style.backgroundColor = 'transparent';
    contactTab.style.color = 'rgb(172, 171, 171)';
});

contactTab.addEventListener('click', function() {
    contactTab.style.backgroundColor = 'rgb(141, 3, 3)';
    contactTab.style.color = 'white';
    homeTab.style.backgroundColor = 'transparent';
    homeTab.style.color = 'rgb(172, 171, 171)';
    aboutTab.style.backgroundColor = 'transparent';
    aboutTab.style.color = 'rgb(172, 171, 171)';
    servicesTab.style.backgroundColor = 'transparent';
    servicesTab.style.color = 'rgb(172, 171, 171)';
    blogTab.style.backgroundColor = 'transparent';
    blogTab.style.color = 'rgb(172, 171, 171)';
    projectTab.style.backgroundColor = 'transparent';
    projectTab.style.color = 'rgb(172, 171, 171)';
});