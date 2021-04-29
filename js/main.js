
$('.main--page .row > div').click(() => {

    // $('.main--page .row > div').css({
    //     'transform': 'translateY(-100%)',
    // })
    let countryClick;
    // console.log(event.target.querySelector('h3').innerText)
    countryClick = JSON.stringify(event.target.querySelector('h3').innerText);
    localStorage.setItem('address', countryClick);
    if(event.target.querySelector('h3').innerText == 'London'){
        window.open('london.html', '_parent');
    }
    if(event.target.querySelector('h3').innerText == 'Tokyo'){
        window.open('tokyo.html', '_parent');
    }
    if(event.target.querySelector('h3').innerText == 'New York'){
        window.open('newyork.html', '_parent');
    }
    if(event.target.querySelector('h3').innerText == 'Sydney'){
        window.open('sydney.html', '_parent');
    }
})




