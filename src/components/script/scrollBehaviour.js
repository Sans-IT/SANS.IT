window.addEventListener('scroll', function(){
    const navigasi = document.querySelector('#navigasi');
    navigasi.classList.toggle('shadow', window.scrollY > 0);
    navigasi.classList.toggle('p-2', window.scrollY > 0);
})