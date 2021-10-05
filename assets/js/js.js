window.onload = function() {


    let dropList = document.querySelector('#dropList'),
        btnNavActiv = document.querySelector('#btnNav'),
        settingMenu = document.querySelector('#setting'),
        settingMenuBtn = settingMenu.querySelector('button');

    // to show dropdown list
    let down = function() {

        if (dropList.classList.contains('show')) {
            dropList.classList.add('hide');
            dropList.classList.remove('show');
        } else {
            dropList.classList.add('show');
            dropList.classList.remove('hide');


        }

        btnNavActiv.classList.toggle('active')

    }



    //setting menu
    let setting = function(e) {
        settingMenu.classList.toggle('show');
        e.target.parentElement.classList.toggle('active');


    }
    document.querySelector('#settingBtn').addEventListener('click', setting)


    // themes colors options
    let options = settingMenu.querySelectorAll('li');

    function getActive() {
        options.forEach((e) => {
            e.classList.remove('active');
            if (e.dataset.color == localStorage.getItem('color'))
                e.classList.add('active');
        })
    }

    if (localStorage.getItem('color') != null) {
        document.documentElement.style.setProperty('--main--color', localStorage.getItem('color'));
        getActive();
    }
    options.forEach((e) => {
        e.addEventListener('click', (e) => {
            document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
            localStorage.setItem('color', e.target.dataset.color);
            getActive();
        })
    })


    // swip theme
    let swipTheme = document.querySelector('#swipTheme');
    document.documentElement.style.setProperty('--whiteColor', localStorage.getItem('white'))
    document.documentElement.style.setProperty('--blackColor', localStorage.getItem('black'))
    swipTheme.dataset.color = localStorage.getItem('datasetcolor');
    document.documentElement.style.setProperty('--grayColor', localStorage.getItem('gray'))
    if (localStorage.getItem('white') == '#111') {
        swipTheme.classList.toggle('day');
        document.querySelector('#swipThemeSpan').classList.toggle('right')
    }


    swipTheme.addEventListener('click', (e) => {


        document.querySelector('#swipThemeSpan').classList.toggle('right')
        swipTheme.classList.toggle('day');




        document.documentElement.style.setProperty('--blackColor', swipTheme.dataset.color)
        localStorage.setItem('black', swipTheme.dataset.color)
        if (swipTheme.dataset.color == '#111') {
            swipTheme.dataset.color = 'rgb(241, 240, 240)';
            localStorage.setItem('datasetcolor', swipTheme.dataset.color)
            document.documentElement.style.setProperty('--grayColor', '#333')
            localStorage.setItem('gray', '#333')

        } else {
            swipTheme.dataset.color = '#111';
            localStorage.setItem('datasetcolor', swipTheme.dataset.color)
            document.documentElement.style.setProperty('--grayColor', '#ddd')
            localStorage.setItem('gray', '#ddd')
        }
        document.documentElement.style.setProperty('--whiteColor', swipTheme.dataset.color)
        localStorage.setItem('white', swipTheme.dataset.color)









    })




    // skills progress




    // sections active
    let sections = document.querySelectorAll('section');
    let navBtns = dropList.querySelectorAll('li');
    let homeBtns = document.querySelector('#homeBtns').querySelectorAll('button')
    btnNavActiv.addEventListener('click', down)
    for (let index = 0; index < sections.length; index++) {
        navBtns[index].addEventListener('click',
            function slideSection() {
                sections.forEach(e => {
                    e.classList.remove('active');
                })
                sections[index].classList.add('active');
                down();


                // active btn
                navBtns.forEach(e => {
                    e.classList.remove('active')
                })
                navBtns[index].classList.add('active')

            });

    }
    homeBtns[0].addEventListener('click', function slideSection() {
        sections.forEach(e => {
            e.classList.remove('active');
        })
        sections[1].classList.add('active');


        // active btn
        navBtns.forEach(e => {
            e.classList.remove('active')
        })
        navBtns[1].classList.add('active')

    });
    homeBtns[1].addEventListener('click', function slideSection() {
        sections.forEach(e => {
            e.classList.remove('active');
        })
        sections[2].classList.add('active');


        // active btn
        navBtns.forEach(e => {
            e.classList.remove('active')
        })
        navBtns[2].classList.add('active')

    });




    // date
    let date = new Date().getFullYear()
    let datesElmnts = document.getElementsByClassName('footer-date')


    for (let i = 0; i < datesElmnts.length; i++) {
        datesElmnts[i].innerText = date


    }
    // preloader

    let preloader = document.querySelector('#preloader');

    setTimeout(() => {
        preloader.style.display = 'none'
    }, 3000)

}