const classesDOM = {
    classGallery : document.querySelector('.classes__gallery'),
    classesBtn : document.querySelectorAll('.classes__subtitle'),
    classesSlider : document.querySelectorAll('.classes__class'),
    slideSideR : document.querySelector('.classes__slideR'),
    closeBtn : document.querySelectorAll('.classes__content--close'),
    bookBtn : document.querySelectorAll('.classes__content--btn'),
    classBooking : document.querySelector('.classes__booking'),
    bookClose : document.querySelectorAll('.booking__close'),
    bookDates : document.querySelector('.booking__dates')
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

    figcaption : {
        img1 : "Relax in the studio lounge",
        img2 : "Our wonderful studio",
        img3 : "The studio's kitchen to indulge",
        img4 : "A superb floral arrangement made by our student Daisy",
        img5 : "A few creations from the pottery class", 
        img6 : "The painting class on a flower theme",
        img7 : "A glimpse into the creativity class",
        img8 : "Watercolours practice in the painting class",
        img9 : "Demonstration of a floral crown built",
        img10 : "Our beginners sewers first pouches"
    }
}

const booking = [
    pottery = {
        day:['Monday : ', 'Thursday : ', 'Saturday : '],
        time : ['6 - 8pm', '7 - 9pm', '1 - 3pm'],
        slot : ['4 slots left', '1 slots left', '2 slots left']
    },
    drawing = {
        day:['Tuesday : ', 'Wednesday : ', 'Sunday : '],
        time : ['3 - 5pm', '6 - 8pm', '10 - 12am'],
        slot : ['3 slots left', '2 slots left', '4 slots left']
    },
    sewing = {
        day:['Thursday : ', 'Saturday : '],
        time : ['5 - 7pm', '2 - 4pm'],
        slot : ['1 slots left', '1 slots left']
    },
    flowers = {
        day:['Tuesday : ', 'Wednesday : ', 'Friday : '],
        time : ['7 - 9pm', '2 - 4pm', '9 - 11am'],
        slot : ['2 slots left', '1 slots left', '4 slots left']
    },
    crea = {
        day:['Monday : ', 'Friday : ', 'Sunday : '],
        time : ['5 - 7pm', '6 - 8pm', '11 - 1pm'],
        slot : ['2 slots left', '2 slots left', '1 slots left']
    }
]


const classesBtnArr = Array.from(classesDOM.classesBtn);
const classesSliderArr = Array.from(classesDOM.classesSlider);
const closeBtnArr = Array.from(classesDOM.closeBtn);
const bookBtnArr = Array.from(classesDOM.bookBtn);
const bookCloseArr = Array.from(classesDOM.bookClose);
const photoGalleryArr = Array.from(galleryDOM.photoGallery);


function getID(e){
    let fullID;

    if(e.target.id) {
        fullID = e.target.id;        
    } else {
        fullID = e.target.parentNode.id;       
    }
    
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

function bookDisplay(id) {

    //display day time places from object according to id selected
    const index = id -1;

    //Add list container

    const htmlBook = `<ul class ="booking__list"></ul>`;
    classesDOM.bookDates.insertAdjacentHTML('beforeend', htmlBook); 

    //Add item in list according to array in objects
    const bookList = document.querySelector('.booking__list');

    for (let i = 0 ; i < booking[index].day.length ; i++) {

        const htmlItem = 
            `<li class="booking__item clearfix">                                
                <div class="booking__day">${booking[index].day[i]} ${booking[index].time[i]}</div>
                <div class="booking__places">${booking[index].slot[i]}</div>
                <button class = "btn booking__btn">Book</button>                                
            </li>`;
        bookList.insertAdjacentHTML('beforeend', htmlItem);        
    }

    //Display list
    classesDOM.classBooking.style.display = 'block';
}

function bookClose(){
    const bookList = document.querySelector('.booking__list');
    //remove class booking list
    if(bookList){                
        bookList.parentNode.removeChild(bookList);    
    }
    //Hide full screen booking
    classesDOM.classBooking.style.display = 'none';
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
                 alt="${galleryDOM.figcaption['img'+id]}"
                 class="gallery__img"
                 id="img-${id}">
            <figcaption class="gallery__caption">${galleryDOM.figcaption['img'+id]}</figcaption>
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
    
    classesSliderArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {                          
            const ID = getID(e); 
            courseExtend(ID);                                          
        })  
    })

    bookBtnArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {                  
            const bookID = getID(e);
            bookDisplay(bookID);
        })
    })

    bookCloseArr.forEach((cur) => {
        cur.addEventListener('click', bookClose)
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




