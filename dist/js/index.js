const classesDOM = {
    classGallery : document.querySelector('.classes__gallery'),
    classesBtn : document.querySelectorAll('.classes__subtitle'),
    classesSlider : document.querySelectorAll('.classes__class'),
    slideSideR : document.querySelector('.classes__slideR'),
    closeBtn : document.querySelectorAll('.classes__content--close'),
}

const galleryDOM = {
    photoGallery : document.querySelectorAll('.gallery__photo'),
    fullScreen : document.querySelector('.gallery__fullScreen'),
    fullImg : document.querySelector('.gallery__fullImg'),
    closeBtn : document.querySelector('.gallery__close'),
    allImg : document.querySelectorAll('.gallery__photo') ,
    imgIdArr :[],
    arrL : document.querySelector('.gallery__arrow--L'),
    arrR : document.querySelector('.gallery__arrow--R'),
}


const classesBtnArr = Array.from(classesDOM.classesBtn);
const classesSliderArr = Array.from(classesDOM.classesSlider);
const closeBtnArr = Array.from(classesDOM.closeBtn);

const photoGalleryArr = Array.from(galleryDOM.photoGallery);


function getID(e){
    const fullID = e.target.id;
    const splitID = fullID.split('-');
    const ID = splitID[1];

    return ID;
}

/***************************************************COURSES*********************************************************/

function courseExtend(ID) {
    
    //List all the classes
    const galClasses = listClasses();
                            
    if (galClasses.length > 1){ //if more than one class, remove the last one to change BG previously applied
        classesDOM.classGallery.classList.remove(`${galClasses[galClasses.length -1]}`);
    };             

    //Add class to change BG
    classesDOM.classGallery.classList.add(`classBG-js-${ID}`);
    
    // Fades off the courses images
    classesSliderArr.forEach((cur) => {
        cur.classList.add('none');
    })            

    //Sliders come in
    document.querySelector(`.classes__slideL--${ID}`).style.transform = 'translateX(0%)';
    document.querySelector(`.classes__slideR--${ID}`).style.transform = 'translateX(0%)';   
}

function listClasses(){
    //Get an array with all the classes on the gallery container
    let classList = classesDOM.classGallery.classList;
    let classListArr =  Array.from(classList);
    return classListArr;
}

function courseClose(ID) {

    document.querySelector(`.classes__slideL--${ID}`).style.transform = 'translateX(-100%)';
    document.querySelector(`.classes__slideR--${ID}`).style.transform = 'translateX(200%)';            

    classesSliderArr.forEach((cur) => {
        cur.classList.remove('none');  
    })   
}



/***************************************************GALLERY*********************************************************/

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

    galleryDOM.fullImg.insertAdjacentHTML('beforeend', newHtml)   
}

function removeFigure(){
    const imgFigure = document.querySelector('.gallery__figure');            
    imgFigure.parentNode.removeChild(imgFigure);    
}

function photoFullScreen(ID) {

    galleryDOM.fullScreen.style.visibility = 'visible';
    addFigure(ID);
}


function closePhoto(){
    galleryDOM.fullScreen.style.visibility = 'hidden';  
    removeFigure();
}

function nextPhoto(){    

    const ID = getImgID();   
    const nextID = parseInt(ID) +1;

    if(ID < 10 ){
        //Remove previous figure
        removeFigure();
        //Add next one
        addFigure(nextID);    
    }
}

function previousPhoto(){

    const ID = getImgID();   
    const previousID = parseInt(ID) -1;
    if(ID > 1){
        //Remove previous figure
        removeFigure();
        //Add next one
        addFigure(previousID);
    }
}

/***************************************************EVENT_LISTENERS*********************************************************/

function setEventListeners(){

    //Course listeners
    
    classesBtnArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {                          
            const ID = getID(e); 
            courseExtend(ID);                                          
        })  
    })

    closeBtnArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {           
            const closeID = getID(e);
            courseClose(closeID);
        })
    })

    //Gallery listeners

    photoGalleryArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {                  
            const photoID = getID(e);
            photoFullScreen(photoID);                        
        })
    })

    galleryDOM.closeBtn.addEventListener('click', closePhoto);

    galleryDOM.arrR.addEventListener('click', nextPhoto);  
    galleryDOM.arrL.addEventListener('click', previousPhoto);  
}

function init(){
    setEventListeners();
}

init();




