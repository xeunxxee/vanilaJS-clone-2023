const images = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${chosenImage}`;
/* html에서 <img src=~/> 설정하는 것과 동일 */

document.body.appendChild(backgroundImage); /* append: 제일 뒤에, prepend: 제일 앞에 */