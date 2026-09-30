const API = 'http://localhost:3000/api';

(() => {
  const { page = '', root = '' } = document.body.dataset;
  const link = (id, href, txt) => `<a href="${root}${href}" class="${page === id ? 'ativo' : ''}">${txt}</a>`;
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="nav"><div class="nav-in">
      <a class="logo" href="${root}index.html"><span>♥</span><b>AdoptMe</b></a>
      <nav class="nav-links">
        ${link('sobre', 'index.html', 'sobre')}
        ${link('animais', 'pages/animais.html', 'animais')}
        ${link('doar', 'pages/doar.html', 'doar')}
        <a href="${root}pages/perfil.html" class="avatar-mini" title="Meu perfil">👤</a>
      </nav>
    </div></header>`);
})();
