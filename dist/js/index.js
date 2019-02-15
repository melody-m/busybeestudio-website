
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


const photoGallery = document.querySelectorAll('.gallery__photo');
const photoGalleryArr = Array.from(photoGallery);

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

function getID(e){
    const fullID = e.target.id;
    const splitID = fullID.split('-');
    const ID = splitID[1];

    return ID;
}

/////GALLERY//////////


const gallery = {
    fullScreen : document.querySelector('.gallery__fullScreen'),
    fullImg : document.querySelector('.gallery__fullImg'),
    closeBtn : document.querySelector('.gallery__close'),
    allImg : document.querySelectorAll('.gallery__photo') ,
    imgIdArr :[],
    arrL : document.querySelector('.gallery__arrow--L'),
    arrR : document.querySelector('.gallery__arrow--R'),
}


function getImgID(){
    const fullImg = document.querySelector('.gallery__img');
    const fullImgID = fullImg.id; 
    const splitID = fullImgID.split('-');
    const imgID = splitID[1];

    return imgID;
}


function addFigure(id){

    const newHtml = `<figure class="gallery__figure">
            <img src="img/gallery-${id}.jpg"
                 alt="Our studio lounge"
                 class="gallery__img"
                 id="img-${id}">
            <figcaption class="gallery__caption">Our studio lounge</figcaption>
            </figure>`

    gallery.fullImg.insertAdjacentHTML('beforeend', newHtml);   

}

function removeFigure(){
    const imgFigure = document.querySelector('.gallery__figure');            
    imgFigure.parentNode.removeChild(imgFigure);    
}

function photoFullScreen() {

    photoGalleryArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {         
            
            const photoID = getID(e);
            gallery.fullScreen.style.visibility = 'visible';
            addFigure(photoID);            
        })
    })
}


function closePhoto(){
    gallery.closeBtn.addEventListener('click', () => {        
        gallery.fullScreen.style.visibility = 'hidden';  
        removeFigure();
    })
}

function nextPhoto(){     

    gallery.arrR.addEventListener('click',() => {      

        const ID = getImgID();   
        const nextID = parseInt(ID) +1;

        if(ID < 10 ){
            //Remove previous figure
            removeFigure();
            //Add next one
            addFigure(nextID);    
        }
    })   
}

function previousPhoto(){

    gallery.arrL.addEventListener('click',() => {
        const ID = getImgID();   
        const previousID = parseInt(ID) -1;

        if(ID > 1){
            //Remove previous figure
            removeFigure();
            //Add next one
            addFigure(previousID);
        }
    })
}
//////

//EVENT LISTENERS





slideExtend();
closeClass();
photoFullScreen();
closePhoto();
nextPhoto();
previousPhoto();




