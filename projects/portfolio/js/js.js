let pills = document.getElementById('navPills').children,
    btnNav = document.getElementById('btn-nav'),
    navCollapse = document.getElementById('navbarSupportedContent'),
    navUi = document.getElementById('navPills'),
    title = document.getElementById('title'),
    card = document.getElementById('card'),
    contentAbout = document.getElementById('content'),
    overlay = document.getElementById('overlay'),
    scr = window.innerHeight,
    activy = document.getElementsByClassName('active')[0],
    sections = document.getElementsByClassName('section'),
    works = document.getElementsByClassName('work-img');

window.onload = function() {
    title.style.display = "block";
    navPills.style.display = 'flex';
    navUi.style.transform = 'translateY(0)';
}

function scrol() {
    scrolling = window.scrollY
    let activSection;
    getActive = () => {
        for (let index = 0; index < pills.length; index++) {
            if (pills[index].classList.contains('active')) activSection = index;
        };
    }
    getActive();

    window.scrollTo(0, scrollHeight(activSection))
}


function scrollHeight(nOfSections) {
    let height = 0;
    for (let index = 0; index <= nOfSections; index++) {
        height += sections[index].clientHeight

    }
    return height - 100 //for minus height ;
}
window.onscroll = function() {

    let scroll = window.scrollY


    // home
    if (scroll > 0) {
        if (!pills[0].classList.contains('active')) {
            this.active(0);
        }
        this.document.getElementById('toTop').style.display = 'none';
        navUi.style.transform = 'translateY(0)';
        activy.style.transform = 'translate(0)';
    }
    // about section
    if (scroll > scrollHeight(0)) {
        navUi.addEventListener('mouseover', () => {
            navUi.style.transform = 'translateY(0)';

        })
        if (!pills[1].classList.contains('active')) {
            this.active(1);
            // to top btn
            this.document.getElementById('toTop').style.display = 'block';

        }
    }
    // skills
    if (scroll > scrollHeight(1)) {
        if (!pills[2].classList.contains('active'))
            this.active(2);
    }
    // works
    if (scroll > scrollHeight(2)) {
        if (!pills[3].classList.contains('active'))
            this.active(3);

    }
    // contacts
    if (scroll >= scrollHeight(3)) {
        if (!pills[4].classList.contains('active'))
            this.active(4);
    }



}

// mobile nav
function showCollapse() {
    let e = navCollapse.style.transform;
    if (navCollapse.classList.contains('hide')) {
        navCollapse.classList.remove('hide')
        navCollapse.classList.add('show');
        navUi.classList.add('animatedShow')


    } else {
        navCollapse.classList.remove('show');
        navCollapse.classList.add('hide')
        navUi.classList.remove('animatedShow')


    }



}
// nav pills
function active(id) {
    for (let index = 0; index < pills.length; index++) {
        pills[index].classList.remove('active');
    }
    pills[id].classList.add('active');
    navUi.style.transform = 'translateY(-45px)'
        // mobile
    navCollapse.classList.remove('show');
    navCollapse.classList.add('hide');
}