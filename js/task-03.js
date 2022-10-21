const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const liItems = [];
const galleryUl = document.querySelector('.gallery');
for (const image of images) {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('gallery__items');
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', image.url);
  imgEl.setAttribute('alt', image.alt);
  navItemEl.appendChild(imgEl);
  liItems.push(navItemEl);

  console.log(navItemEl);
}
galleryUl.append(...liItems);
