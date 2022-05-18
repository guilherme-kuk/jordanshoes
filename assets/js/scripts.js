let itens = document.querySelectorAll('.item');
let bgModal = document.querySelector('#bgModal');
let modal = document.querySelector('#modal');
let imgModal = document.querySelector('#imgModal');
let btnClose = document.querySelector('#btnClose');

let srcValue = '';

// alternar janela modal
function openModal() {
    bgModal.classList.toggle('modal-active');
    modal.classList.toggle('modal-active');
    imgModal.classList.toggle('modal-active');
    document.body.classList.toggle('scroll');
    
}

// abrir modal conforme valor do item
for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', function () {
        srcValue = itens[i].getAttribute('src');
        imgModal.setAttribute('src', srcValue);
        openModal();
    });
}

// fechar modal pelo botão x
btnClose.addEventListener('click', () => {
    openModal();
});

// fechar modal pelo background
bgModal.addEventListener('click', () => {
    openModal();
});

// fechar modal pelo ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        bgModal.classList.remove('modal-active');
        modal.classList.remove('modal-active');
        imgModal.classList.remove('modal-active');
        document.body.classList.remove('scroll');
    }
});

