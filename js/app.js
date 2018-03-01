const form = document.getElementById('search-form');
const searchFile = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');

form.addEventListener('submit', function (e)){
  e.preventDefault();
  response.container.innerHTML='';
  searchForText = serarch.value;
  getNews();
}
