const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-nav');
const menubrand = document.querySelector('.menu-branding');
const items = document.querySelectorAll('.nav-item');

let show = false;
menubtn.addEventListener('click', togglemenu);

function togglemenu(){
    if(!show){
        menubtn.classList.add('close');
        menu.classList.add('show');
        menunav.classList.add('show');
        menubrand.classList.add('show');
        items.forEach(item=>item.classList.add('show'));
        show=true;
    } else{
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menunav.classList.remove('show');
        menubrand.classList.remove('show');
        items.forEach(item=>item.classList.remove('show'));
        show=false;
    }
}
