window.onload = () => {
    const burger_component = document.querySelector('.burger__component');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.navbar__nav');
    const email = document.querySelector('.email');
    const form = document.querySelector('.form');
    const name = document.querySelector('.name');
    const subject = document.querySelector('.subject');
    const massage = document.querySelector('.massage');
    const verifyEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let isOpen = false;
    burger.addEventListener('click', function () {
        if (!isOpen) {
            burger_component.classList.add('open');
            menu.classList.add('open');
            isOpen = true;
        } else {
            burger_component.classList.remove('open');
            menu.classList.remove('open');
            isOpen = false;
        }
    });


    form.addEventListener('submit', function (e) {
        if (name.value && email.value && subject.value && massage.value) {
            return
        } else {
            e.preventDefault();
        }
        throwError(name, 'Name must be required');
        throwError(subject, 'Please give your requirements');
        throwError(massage, 'Say something for us')
        if (!email.value.match(verifyEmail)) {
            let err = email.parentElement;
            let tar = err.querySelector('.error')
            tar.innerHTML = 'Please give a valid email'
            tar.style.display = 'block'
            email.style.border = '1px solid rgba(224, 42, 42, 0.801)';
        } else {
            email.style.border = '1px solid rgba(13, 151, 87, 0.651)';
            let err = email.parentElement;
            let tar = err.querySelector('.error');
            tar.style.display = 'none'
        }
    });

    function throwError(input, mass) {
        let getTar = input.parentElement;
        let err = getTar.querySelector('.error')
        if (input.value === '' || input.value == null) {
            input.style.border = '1px solid rgba(224, 42, 42, 0.801)';
            err.classList.add('show');
            err.innerHTML = mass
        } else {
            input.style.border = '1px solid rgba(13, 151, 87, 0.651)';
            err.style.display = 'none'
        }
    };
};


$(document).ready(() => {
    $(document).on('click', '.breadcrumb__wrapper li', function () {
        $('.breadcrumb__wrapper li').removeClass('open');
        $(this).addClass('open')
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollToTop').fadeIn(200)
        } else {
            $('#scrollToTop').fadeOut(200)
        }
    });

    //Disable the default behaviour of the browser

    $(document).bind('contextmenu', function (e) {
        e.preventDefault();
        alert('You can\'t inspect and see the codes 😎😎😎')
    });

    $(document).keydown(function (e) {
        if (e.which === 123) {
            alert('You can\'t inspect and see the codes 😎😎😎');
            return false
        }
    });

    $(document).bind('keydown', function (e) {
        if (e.ctrlKey && (e.which === 83)) {
            e.preventDefault();
            alert('Trying to download. Hey, remember that you can\'t 😎😎😎')
            return false;
        }
    });

    window.oncontextmenu = function () {
        return false
    };

    $(document).keydown(function (e) {
        if (e.keyCode === 123) {
            alert('You can\'t inspect and see the codes 😎😎😎')
            return false;
        } else if((e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.shiftKey && e.keyCode === 74)){
            alert('Trying to download. Hey, remember that you can\'t 😎😎😎')
            return false;
        }
    })
});

$(window).on('load',function () {
    $('#preloader').addClass('loaded')
})