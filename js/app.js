const form = document.getElementById('search-form');
const searchFile = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchFile.value;
  getNews();
});


function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=d5cc5a33aca64b6aaf7594ebca53ba3a`)
  articleRequest.onload = addNews;
  articleRequest.onerror = hanleError;
  articleRequest.send();
};

function addNews() {
  const data = JSON.parse(this.responseText);
  const articles = data.response.docs;
  console.log(articles);
  let notice=' ';
  articles.forEach(element => {
    let title = element.headline.main;
    let snippet = element.snippet;
    let img = `https://www.nytimes.com/${element.multimedia[1].legacy.wide}`;
    notice += `<li class="collection-item avatar">
                    <img src=${img} alt="" class="circle">
                    <a href="#!" class="title">${title}<span class="title">Title</span></a>
                    <p>${snippet}</p>
                  </li>`;
                  console.log(notice);
    // let li = document.createElement('li');
    // let photo = document.createElement('img');
    // let span = document.createElement('span');
    // let resumen = document.createElement('p');
    // let href = element.web_url;
    // li.className = 'collection-item avatar';
    // photo.src = img;
    // photo.className = 'circle'
    // span.innerText = title;
    // span.className = 'title';
    // photo.setAttribute('href', href)
    // resumen.innerText = snippet;
     responseContainer.innerHTML=notice;
    //li.appendChild(photo);
    //li.appendChild(span);
  //  li.appendChild(resumen);
  })
};

function hanleError() {
  console.log('Se ha presentado un error');
};
