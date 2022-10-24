let acceptBtn = document.querySelector('#accept-btn');

acceptBtn.addEventListener('click', function() {
   document.querySelector('#alert-footer').remove();
})

let cartImg = document.querySelector('#cart');

cartImg.addEventListener('click', function() {
    alert('Your Cart is empty!');
 })

 let mainPictureImg = document.querySelector('.main-picture-1');

 mainPictureImg.addEventListener('mouseover', function() {
    mainPictureImg.src = 'assets/succulents-2.jpg';
 });

 mainPictureImg.addEventListener('mouseout', function() {
    mainPictureImg.src = 'assets/succulents-1.jpg';
 });