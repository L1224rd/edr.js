const el = (tagName, attributes, innerHTML) => {
  const getAttributes = () => {
    let attrs = '';
    Object.keys(attributes).forEach((key) => {
      attrs += `${key}="${attributes[key]}" `;
    });
    return attrs;
  }

  const getInnerHTML = () => {
    let html = '';
    if (Array.isArray(innerHTML)) {
      innerHTML.forEach((child) => {
        html += child;
      });
      return html;
    }
    return innerHTML;
  }

  return `<${tagName} ${getAttributes()}>${getInnerHTML()}</${tagName}>`;
}

const frutas = ['banana', 'maçã', 'melancia'];

const showTitle = 0;

const root = el('div', { id: 'root', class: 'ok' }, [
  el('p', { style: 'color:red' }, 'This is a p'),
  el('p', { style: 'color:blue' }, 'This is another p'),
  el('ul', { id: 'lista' },
    frutas.map(fruta => el('li', { id: Math.floor(Math.random() * 20) }, fruta))),
  el('div', {}, [
    showTitle ? el('h1', {}, 'Title') : '',
    el('h2', {}, 'Subtitle'),
  ])
]);

document.querySelector('body').innerHTML += root;