window.onscroll = ()=>{
    if(document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400){
        $('.london__gallery').css({
            'background-color': '#1A1C1E',
        })
        $('.london__gallery .london__gallery__content h1').css({
            'color': '#F2F2F3',
        })
    }
    else{
        $('.london__gallery').css({
            'background-color': '#F2F2F3',
        })
        $('.london__gallery .london__gallery__content h1').css({
            'color': 'black',
        })
    }
}
document.querySelector('.london').onload = () => {
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
            let address = arrayCounntry[index].querySelector('h3').innerHTML;
            if(address !== countryClick){
                setTimeout(()=>{
                    arrayCounntry[index].style.transform = 'translateY(-100%)';
                },index * 200 + 500)
            }
        }
        else{
            setTimeout(()=>{
                arrayCounntry[index].style.transform = 'translateX(-100%)';
            },index * 200 + 500)
        }
    }
    arrayCounntry[0].querySelector('.main--page__overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    setTimeout(()=>{
        arrayCounntry[0].style.opacity = '0';
        $('.london__title').css({
            'width': '100%',
            
        })
    },500)
    setTimeout(()=>{
        $('.london__title h1').css({
            'opacity': '1',
            'transform': 'translateY(0)',
            
        })
    },1300)
}
window.onresize = ()=>{
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
            let address = arrayCounntry[index].querySelector('h3').innerHTML;
            if(address !== countryClick){
                setTimeout(()=>{
                    arrayCounntry[index].style.transform = 'translateY(-100%)';
                },index * 200 + 500)
            }
        }
        else{
            setTimeout(()=>{
                arrayCounntry[index].style.transform = 'translateX(-100%)';
            },index * 200 + 500)
        }
    }
}

