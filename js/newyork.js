window.onscroll = () => {
    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        $('.newyork__gallery--sticky img').css({
            'opacity': '.5',
        })

    }
    else {
        $('.newyork__gallery--sticky img').css({
            'opacity': '1',
        })

    }

    if (document.body.scrollTop > 7100 || document.documentElement.scrollTop > 7100) {
        let x = (document.documentElement.scrollTop - 7000) / 10;

        $('#newyork__label__gallery--1').css({
            'width': `calc(100% - ${x}px)`
        })
        if (document.body.scrollTop > 7500 || document.documentElement.scrollTop > 7500) {
            let y = (document.documentElement.scrollTop - 7500) / 10;

            $('#newyork__label__gallery--2').css({
                'width': `calc(100% - ${y}px)`
            })
        }
    }
}
document.querySelector('.newyork').onload = () => {
    let countryClick;
    countryClick = JSON.parse(localStorage.getItem('address'));
    // console.log(countryClick)
    let arrayCounntry = document.querySelectorAll('.main--page .row > div');
    // console.log(arrayCounntry[0].querySelector('h3'))
    for (let index in arrayCounntry) {
        if (index == 'entries') {
            break;
        }
        if (window.innerWidth > 768) {
            let address = arrayCounntry[3 - index].querySelector('h3').innerHTML;
            if (address !== countryClick) {
                setTimeout(() => {
                    arrayCounntry[3 - index].style.transform = 'translateY(-100%)';
                }, index * 200 + 500)
            }
        }
        else {
            setTimeout(() => {
                arrayCounntry[3 - index].style.transform = 'translateX(-100%)';
            }, index * 200 + 500)
        }
    }
    arrayCounntry[2].querySelector('.main--page__overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    setTimeout(() => {
        arrayCounntry[2].style.opacity = '0';
        $('.newyork__title').css({
            'width': '100%',

        })
    }, 500)
    setTimeout(() => {
        $('.newyork__title h1').css({
            'opacity': '1',
            'transform': 'translateY(0)',

        })
    }, 1300)
}
window.onresize = () => {
    let countryClick;
    countryClick = JSON.parse(localStorage.getItem('address'));
    // console.log(countryClick)
    let arrayCounntry = document.querySelectorAll('.main--page .row > div');
    // console.log(arrayCounntry[0].querySelector('h3'))
    for (let index in arrayCounntry) {
        if (index == 'entries') {
            break;
        }
        if (window.innerWidth > 768) {
            let address = arrayCounntry[3 - index].querySelector('h3').innerHTML;
            if (address !== countryClick) {
                setTimeout(() => {
                    arrayCounntry[3 - index].style.transform = 'translateY(-100%)';
                }, index * 200 + 500)
            }
        }
        else {
            setTimeout(() => {
                arrayCounntry[3 - index].style.transform = 'translateX(-100%)';
            }, index * 200 + 500)
        }
    }
}