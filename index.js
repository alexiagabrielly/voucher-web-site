window.onscroll = () => {
    let nav = document.querySelector('nav');
    if(this.scrollY <= 10){
        nav.className = '';
    } else {
        nav.className = 'scroll';
    }

    console.log(nav);
}

const go = (elemento) => {
    window.scroll({
        top: link.offsetTop-50,
        left: 0,
    });
}