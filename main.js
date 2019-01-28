// window.scrollY - właściwość o którą skrolowaliśmy naszą stronę
// document.documentElement.offsetHeight - wysokość naszej całej strony
// window.innerHeight - wysokość okna przeglądarki

const bar = document.querySelector('.status');
const skrolowanie = () => {
    currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
    bar.style.width = currentScroll + "%";
}

window.addEventListener('scroll', skrolowanie);

const button = document.querySelector('.icon-down-big');

button.addEventListener('click', function(){
    $("html").animate({
        scrollTop: $("#element").offset().top
    }, 1000)
})
