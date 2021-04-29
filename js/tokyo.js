document.querySelector('.tokyo').onload = () => {
    let arrayCounntry = document.querySelectorAll('.main--page .row > div');
    for (let index in arrayCounntry) {
        if (index == 'entries') {
            break;
        }
        if (window.innerWidth > 768) {

            setTimeout(() => {
                arrayCounntry[index].style.transform = 'translateY(-100%)';
            }, index * 200 + 500)

        }
        else {
            setTimeout(() => {
                arrayCounntry[index].style.transform = 'translateX(-100%)';
            }, index * 200 + 500)
        }
    }
    arrayCounntry[1].querySelector('.main--page__overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    setTimeout(() => {
        $('.tokyo__title').css({
            'transform': 'translateX(0)',
        })
    }, 400)
}
$('.tokyo__gallery__img > div').click(() => {
    
    if(window.innerWidth >= 768){
        document.querySelector('.tokyo__gallery__modal__content h1').innerHTML = `Photo ${event.path[1].dataset.id}`
        document.querySelector('.tokyo__gallery__modal__img img').src = event.path[1].querySelector('img').src;
        $('.tokyo__gallery__modal').css({
            // 'display': 'block',
            'transform': 'translateY(0)',
            // 'opacity': '1',
        })
        $('.tokyo__gallery__modal .row').css({
    
            'transform': 'translate(-50%, -50%)',
        })
        $('.tokyo__gallery__modal__content').css({
            'opacity': '1',
        })
    }
})
$('.tokyo__gallery__modal__button').click(() => {

    $('.tokyo__gallery__modal').css({

        'transform': 'translateY(-100%)',

    })
    $('.tokyo__gallery__modal .row').css({

        'transform': 'translate(-50%, -100%)',
    })
    $('.tokyo__gallery__modal__content').css({
        'opacity': '0',
    })
})
window.onresize = () => {
    let arrayCounntry = document.querySelectorAll('.main--page .row > div');
    for (let index in arrayCounntry) {
        if (index == 'entries') {
            break;
        }
        if (window.innerWidth > 768) {

            setTimeout(() => {
                arrayCounntry[index].style.transform = 'translateY(-100%)';
            }, index * 200 + 500)

        }
        else {
            setTimeout(() => {
                arrayCounntry[index].style.transform = 'translateX(-100%)';
            }, index * 200 + 500)
        }
    }
}