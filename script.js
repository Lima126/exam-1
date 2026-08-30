// hidden button
document.getElementById('showBtn').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    const isOpen = navLinks.classList.toggle('nav-links-open');

    this.textContent = isOpen ? 'Hide' : 'Show';
    this.setAttribute('aria-expanded', isOpen);
})

// about button
const aboutElement = document.getElementById('aboutbtn')
aboutElement.addEventListener('click', function () {
    // alert('awdws')
    aboutElement.classList.add('aboutbtn')

    const listElement = document.getElementById('hidden')
    listElement.classList.toggle('hidden')
})
