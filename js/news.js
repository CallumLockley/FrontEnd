"use strict";
async function loadObject() {
  const url = `https://content.guardianapis.com/search?q=referee&section=football&order-by=newest&show-fields=all&page-size=12&api-key=12cf0f50-6581-426a-af97-e44c699ff81a`;
  let response = await fetch(url);
  let data = await response.json();
  return data.response.results;
};


function createLink(obj) {
  const art = document.createElement('article');
  const heading = document.createElement('h3');
  const img = document.createElement('img');
  const anchor = document.createElement('a');
  const div = document.createElement('div');
  const time = document.createElement('p');

  heading.textContent = obj.webTitle.trim();
  heading.classList.add('newsTitle');
  img.src = obj.fields.thumbnail;
  img.alt = 'Article Image'

  let dateTime = new Date(obj.webPublicationDate);
  time.textContent = 'Posted: ' + dateTime;

  anchor.textContent = 'View article here';
  anchor.href = obj.webUrl;

  art.classList.add('newsArticle');
  time.classList.add('timestamp');
  img.classList.add('newsImage');
  div.classList.add('articleContainer');

  div.appendChild(heading);
  div.appendChild(anchor);
  div.appendChild(time);
  art.appendChild(img);
  art.appendChild(div);
  return art;
}

async function process() {
  const articles = await loadObject();
  const links = articles.map(createLink);
  links.forEach((link) => {
    newsList.appendChild(link);
  });
}

process();
