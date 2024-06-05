const links = document.querySelectorAll('.header-nav a');

links.forEach((link) => {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('active');
    }
});

function openSearch(artigo) {
    var article = document.getElementById(`continuacao-artigo-${artigo}`);
    var button = document.getElementById(`continuacao-artigo-${artigo}-button`);

    article.style.display == 'none' ? article.style.display = 'block' : article.style.display = 'none';
    article.style.display == 'none' ? button.innerText = 'Ler mais' : button.innerText = 'Ler menos';
};