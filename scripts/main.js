const DROPDOWN = document.querySelector('[dropdown]');
const DROPDOWN_BTN = document.querySelector('[dropdown-btn]');
const DROPDOWN_LISTA = document.querySelector('[dropdown-lista]');
let ALTURA_ORIGINAL = DROPDOWN_LISTA.clientHeight;

DROPDOWN.style.height = DROPDOWN_BTN.clientHeight + 'px';

if(window.innerWidth >= 1280) {
  DROPDOWN_LISTA.style.height = '0px';
}

window.addEventListener('resize', () => {
  DROPDOWN.style.height = DROPDOWN_BTN.clientHeight + 'px';
  if (window.innerWidth >= 1280) {
    ALTURA_ORIGINAL = DROPDOWN_LISTA.clientHeight;
    DROPDOWN_LISTA.style.opacity = 0;
  } else {
    DROPDOWN_LISTA.style.height = 'initial';
  }
})

DROPDOWN_BTN.onclick = (e) => {
  if (window.innerWidth < 1280) {
    let pai = e.target.parentNode;
    let alturaPai = parseInt(pai.style.height);
    if (!pai.dropdown) {
      pai.dropdown = 'ativo';
      DROPDOWN.style.height = alturaPai + DROPDOWN_LISTA.clientHeight + 'px';
      DROPDOWN_LISTA.style.opacity = 1;
    } else {
      pai.dropdown = '';
      DROPDOWN.style.height = DROPDOWN_BTN.clientHeight + 'px';
    }
  }
}

DROPDOWN.onmouseover = () => {
  if (window.innerWidth >= 1280) {
    DROPDOWN_LISTA.style.height = ALTURA_ORIGINAL + 'px';
    DROPDOWN_LISTA.style.opacity = 1;
  }
}

DROPDOWN.onmouseleave = () => {
  if (window.innerWidth >= 1280) {
    DROPDOWN_LISTA.style.height = '0px';
  }
}