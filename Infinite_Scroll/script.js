const imageContainer = document.getElementById('image-container');

const loader = document.getElementById('loader');

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImagesLoaded = 0;
const imgCount = 30;
const apiKey = 'F27rhk0rxYcA1L8111T8OYK8S45XWC2GvkjWmqRbCaw';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${imgCount}`;

// hemper fun to allow set attibutes
const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
const imageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImagesLoaded) {
    ready = true;
    loader.hidden = true;
  }
}

//create elements for links and photos
const displayPhotos = () => {
  totalImagesLoaded = photosArray.length;

  photosArray.forEach((photo) => {
    // create a <a> for unsplash

    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.links.html,
      target:'_blank'
    })


    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt:photo.urls.alt_description,
      title:photo.urls.alt_description
    })
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.urls.alt_description);
    // img.setAttribute('title', photo.urls.alt_description);
    img.addEventListener('load', imageLoaded);
    // put image inside a <a> 
    item.appendChild(img);
    imageContainer.appendChild(item);

  })
}


// Get photos from unsplash api 
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //catch error
  }
}
// check to if scrooling near the bottom \\
const infiniteScroll = () => {
  // console.log("Scrolled");
  if ((window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000)&&ready) {
    getPhotos();
    ready = false;
    imageLoaded = 0;
  }
}
window.addEventListener('scroll',infiniteScroll)
getPhotos();
