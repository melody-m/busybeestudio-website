
console.log('start');



const classesSlider = document.querySelectorAll('.classes__class');

const classGallery = document.querySelector('.classes__gallery');

const slideSideR = document.querySelector('.slideSideR');
const slideSideL1 = document.querySelector('.slideSideL--1');
const slideSideL2 = document.querySelector('.slideSideL--2');
const slideSideL3 = document.querySelector('.slideSideL--3');
const slideSideL4 = document.querySelector('.slideSideL--4');
const slideSideL5 = document.querySelector('.slideSideL--5');

const classesSliderArr = Array.from(classesSlider);


function slideExtend() {
    classesSliderArr.forEach((cur) => {

        cur.addEventListener('click', (e) => {
            console.log(e.target);

            if (e.target.classList.contains('classes__class--1')){
                classGallery.classList.add('classes__class--1');
            } else if(e.target.classList.contains('classes__class--2')){
                classGallery.classList.add('classes__class--2');
            } else if(e.target.classList.contains('classes__class--3')){
                classGallery.classList.add('classes__class--3');
            } else if(e.target.classList.contains('classes__class--4')){
                classGallery.classList.add('classes__class--4');
            } else if(e.target.classList.contains('classes__class--5')){
                classGallery.classList.add('classes__class--5');
            }

            classesSliderArr.forEach((cur) => {
                cur.classList.add('none');
                // if(cur != e.target){
                //     cur.classList.add('none');             
                // }
                
                cur.addEventListener('transitionend', () => {
                    if (cur.classList.contains('none')){
                        cur.style.display = 'none';
                    }

                    if (e.target.classList.contains('classes__class--1')){
                        slideSideL1.style.transform = 'translateX(0%)';

                    } else if(e.target.classList.contains('classes__class--2')){
                        slideSideL2.style.transform = 'translateX(0%)';

                    } else if(e.target.classList.contains('classes__class--3')){
                        slideSideL3.style.transform = 'translateX(0%)';

                    } else if(e.target.classList.contains('classes__class--4')){
                        slideSideL4.style.transform = 'translateX(0%)';

                    } else if(e.target.classList.contains('classes__class--5')){
                        slideSideL5.style.transform = 'translateX(0%)';
                    }

                    slideSideR.style.transform = 'translateX(0%)';
                    
                    

                })
            })            
        })     

    })    
}


slideExtend();




