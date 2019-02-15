
console.log('start');


const classGallery = document.querySelector('.classes__gallery');

const classesBtn = document.querySelectorAll('.classes__subtitle');
const classesBtnArr = Array.from(classesBtn);

const classesSlider = document.querySelectorAll('.classes__class');
const classesSliderArr = Array.from(classesSlider);

const slideSideR = document.querySelector('.classes__slideR');


const closeBtn = document.querySelectorAll('.classes__content--close');
const closeBtnArr = Array.from(closeBtn);

let bg;

function slideExtend() {
    classesBtnArr.forEach((cur) => {

        cur.addEventListener('click', (e) => {            
            
            const fullID = e.target.id;
            const splitID = fullID.split('-');
            const ID = splitID[1];
                      
            
            //Change BG image to the course selected

            const galClasses = listClasses();
                        
            if (galClasses[galClasses.length]){

                //console.log(typeof (galClasses.length -1));
                classGallery.classList.remove(`${galClasses[galClasses.length]}`);
            };

            //galClasses.length -1
            

            classGallery.classList.add(`classBG-js-${ID}`);
            
            // Fades off the courses images
            classesSliderArr.forEach((cur) => {
                cur.classList.add('none');
            })            

            //Sliders come in
            document.querySelector(`.classes__slideL--${ID}`).style.transform = 'translateX(0%)';
            document.querySelector(`.classes__slideR--${ID}`).style.transform = 'translateX(0%)';
           
        })     

    })    
}

function listClasses(){
    let classList = classGallery.classList;
    let classListArr =  Array.from(classList);
    return classListArr;
}

function closeClass() {
    closeBtnArr.forEach((cur) => {

        cur.addEventListener('click', (e) => {
           

            const closeFullID = e.target.id;
            const splitCloseID = closeFullID.split('-');
            const closeID = splitCloseID[1];

            document.querySelector(`.classes__slideL--${closeID}`).style.transform = 'translateX(-100%)';
            document.querySelector(`.classes__slideR--${closeID}`).style.transform = 'translateX(200%)';
            

            classesSliderArr.forEach((cur) => {
                cur.style.display = 'block';
                cur.classList.remove('none');
            });

        })
    })
}



slideExtend();
closeClass();




