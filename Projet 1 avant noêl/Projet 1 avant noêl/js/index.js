let show = false;
const btn = document.getElementById('btn_nav');
const nav = document.getElementById('nav');
btn.addEventListener('click', ()=>{

    show ? (nav.classList.add('hide__nav') & nav.classList.remove('show__nav')) : nav.classList.remove('hide__nav') & nav.classList.add('show__nav');
    show = !show;
})