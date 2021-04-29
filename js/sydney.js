window.onscroll = () => {
    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        $('.sydney__atmos__img').css({
            'opacity': '1',
            'padding': '0',
        })

    }
    
}
document.querySelector('.sydney').onload = () => {
    let countryClick;
    countryClick = JSON.parse(localStorage.getItem('address'));
    // console.log(countryClick)
    let arrayCounntry = document.querySelectorAll('.main--page .row > div');
    // console.log(arrayCounntry[0].querySelector('h3'))
    for(let index in arrayCounntry){
        if(index == 'entries'){
            break;
        }
        if(window.innerWidth > 768){
            let address = arrayCounntry[3 - index].querySelector('h3').innerHTML;
            if(address !== countryClick){
                setTimeout(()=>{
                    arrayCounntry[3 - index].style.transform = 'translateY(-100%)';
                },index * 200 + 500)
            }
        }
        else{
            setTimeout(()=>{
                arrayCounntry[3 - index].style.transform = 'translateX(-100%)';
            },index * 200 + 500)
        }
    }
    arrayCounntry[3].querySelector('.main--page__overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    setTimeout(()=>{
        arrayCounntry[3].style.opacity = '0';
        $('.sydney__title').css({
            'width': '100%',
            
        })
    },500)
    setTimeout(()=>{
        $('.sydney__title h1').css({
            'opacity': '1',
            'transform': 'translateY(0)',
            
        })
    },1300)
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