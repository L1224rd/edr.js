// returns a html string, ex. <div id="root">yay</div>
const el = (tagName, attributes, innerHTML) => {
  const getAttributes = () => {
    let attrs = '';
    Object.keys(attributes).forEach((key) => {
      attrs += `${key}="${attributes[key]}" `;
    });
    return attrs;
  }

  const getInnerHTML = () => { // can be a string or an array if there's more than 1 child
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

// root is the main div that will be inserted in the html body
const root = el('div', { id: 'root', class: 'ok' }, [
  el('p', { style: 'color:red' }, 'This is a p'), // std p tag
  el('p', { style: 'color:blue' }, 'This is another p'),
  el('ul', { id: 'lista' },
    frutas.map(fruta => el('li', { id: Math.floor(Math.random() * 20) }, fruta))), // populating the list based on a array
  el('div', {}, [
    showTitle ? el('h1', {}, 'Title') : '', // using ternary to show element or not
    el('h2', {}, 'Subtitle'),
  ])
]);

document.querySelector('body').innerHTML += root;
