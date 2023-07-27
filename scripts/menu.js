const BTN_BURGUER = document.querySelector('[data-burguer]');
const BTN_LINHAS = document.querySelectorAll('[data-burguer-linha]');

const NAVEGACAO = document.querySelector('[data-navegacao]');

BTN_BURGUER.addEventListener('click', () => {
  BTN_LINHAS.forEach(linha => {
   linha.toggleAttribute('data-burguer-linha-ativo');
  });
  NAVEGACAO.classList.toggle('navegacao--ativo');
});

let linkAtivo = document.querySelector('[data-estado="ativo"]');
let links = document.querySelectorAll('[data-link]');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    linkAtivo.dataset.estado = '';
    e.target.dataset.estado = 'ativo';
    linkAtivo = e.target;
  })
})