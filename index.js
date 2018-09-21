window.onscroll = () => {
    let header = document.querySelector('header');
    if(this.scrollY <= 10){
        header.classList.remove("scroll");
    } else {
        header.classList.add("scroll");
    }

    console.log(header.classList);
}

const go = (elemento) => {
    window.scroll({
        top: link.offsetTop-50,
        left: 0,
    });
}