const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },  
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  }
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}
setValues();

function showCss() {
  cssText.innerHTML = '<span class="copiar-btn">Copiar</span>' + '<span class="linha"></span>' + '<span class="textoCss">' + btn.style.cssText.split('; ').join(';</span><span class="textoCss">');
}

/*    const botaoCopiar = document.querySelector('.copiar-btn'); */

  function clickBotao(event) {
    if(event.target.classList.contains('copiar-btn')) {
      const textoCss = document.querySelectorAll('.textoCss')
      const texto = Array.from(textoCss).map(el => el.innerText)
      console.log(texto)
    }
  }
  cssText.addEventListener('click', clickBotao)
  
  
  
  /*     navigator.clipboard.writeText(textoParaCopiar)
      .then(() => {
        this.innerText = 'Copiado!'
  
        setTimeout(() => {
          this.innerText = textoOriginal
        }, 2000)
      }) */