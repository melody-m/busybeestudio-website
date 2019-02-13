
console.log('start');



const classesSlider = document.querySelectorAll('.classes__class');

const classGallery = document.querySelector('.classes__gallery');

const classesSliderArr = Array.from(classesSlider);


function slideExtend() {
    classesSliderArr.forEach((cur) => {

        cur.addEventListener('click', (e) => {

            if(e.target.classList.contains('classes__class--1')){
                classGallery.style.backgroundImage = 'url("../img/pottery2.jpg")';
            } else if(e.target.classList.contains('classes__class--1')){
                classGallery.style.backgroundImage = 'url("../img/drawing.jpg")';
            } else if(e.target.classList.contains('classes__class--2')){
                classGallery.style.backgroundImage = 'url("../img/drawing.jpg")';
            } else if(e.target.classList.contains('classes__class--3')){
                classGallery.style.backgroundImage = 'url("../img/sewing.jpg")';
            } else if(e.target.classList.contains('classes__class--4')){
                classGallery.style.backgroundImage = 'url("../img/flower.jpg")';
            } else if(e.target.classList.contains('classes__class--5')){
                classGallery.style.backgroundImage = 'url("../img/crea.jpg")';
            }


            classesSliderArr.forEach((cur) => {
                if(cur != e.target){
                    cur.classList.add('none');             
                }
                
                cur.addEventListener('transitionend', () => {
                    if (cur.classList.contains('none')){
                        cur.style.display = 'none';
                    }
                    e.target.style.backgroundImage = 'url("")';
                    e.target.classList.replace('width','extend');
                })
            })            
        })     

    })    
}


slideExtend();




