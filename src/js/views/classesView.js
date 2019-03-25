export const classesDOM = {
    classGallery : document.querySelector('.classes__gallery'),
    classesBtn : document.querySelectorAll('.classes__subtitle'),
    classesSlider : document.querySelectorAll('.classes__class'),
    slideSideR : document.querySelector('.classes__slideR'),
    closeBtn : document.querySelectorAll('.content__close'),
    bookBtn : document.querySelectorAll('.content__btn'),
    classBooking : document.querySelector('.classes__booking'),
    bookClose : document.querySelectorAll('.booking__close'),
    bookDates : document.querySelector('.booking__dates')
}

export const classesArr = Array.from(classesDOM.classesSlider);
export const classesBtnArr = Array.from(classesDOM.bookBtn);
export const classesCloseArr = Array.from(classesDOM.bookClose);
export const classesCloseBtnArr = Array.from(classesDOM.closeBtn);

const booking = [
    {
        name: 'pottery',
        day:['Monday : ', 'Thursday : ', 'Saturday : '],
        time : ['6 - 8pm', '7 - 9pm', '1 - 3pm'],
        slot : ['4 slots left', '1 slots left', '2 slots left']
    },
    {
        name: 'drawing',
        day:['Tuesday : ', 'Wednesday : ', 'Sunday : '],
        time : ['3 - 5pm', '6 - 8pm', '10 - 12am'],
        slot : ['3 slots left', '2 slots left', '4 slots left']
    },
    {
        name: 'sewing',
        day:['Thursday : ', 'Saturday : '],
        time : ['5 - 7pm', '2 - 4pm'],
        slot : ['1 slots left', '1 slots left']
    },
    {
        name: 'flowers',
        day:['Tuesday : ', 'Wednesday : ', 'Friday : '],
        time : ['7 - 9pm', '2 - 4pm', '9 - 11am'],
        slot : ['2 slots left', '1 slots left', '4 slots left']
    },
    {
        name:'crea',
        day:['Monday : ', 'Friday : ', 'Sunday : '],
        time : ['5 - 7pm', '6 - 8pm', '11 - 1pm'],
        slot : ['2 slots left', '2 slots left', '1 slots left']
    }
]



export function courseExtend(ID) {
    
    //List all the classes
    const galClasses = listClasses();
                            
    if (galClasses.length > 1){ //if more than one class, remove the last one to change BG previously applied
        classesDOM.classGallery.classList.remove(`${galClasses[galClasses.length -1]}`);
    };             

    //Add class to change BG
    classesDOM.classGallery.classList.add(`classBG-js-${ID}`);
    
    // Fades off the courses images
    classesArr.forEach((cur) => {
        cur.classList.add('none');       
    })            

    //Sliders come in
    document.querySelector(`.classes__slideL--${ID}`).style.transform = 'translateX(0%)';
    document.querySelector(`.classes__slideR--${ID}`).style.transform = 'translateX(0%)';   
}

export function bookDisplay(id) {

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

export function bookClose(){
    const bookList = document.querySelector('.booking__list');
    //remove class booking list
    if(bookList){                
        bookList.parentNode.removeChild(bookList);    
    }
    //Hide full screen booking
    classesDOM.classBooking.style.display = 'none';
}


export function listClasses(){
    //Get an array with all the classes on the gallery container
    let classList = classesDOM.classGallery.classList;
    let classListArr =  Array.from(classList);
    return classListArr;
}

export function courseClose(ID) {

    document.querySelector(`.classes__slideL--${ID}`).style.transform = 'translateX(-100%)';
    document.querySelector(`.classes__slideR--${ID}`).style.transform = 'translateX(200%)';            

    classesArr.forEach((cur) => {
        cur.classList.remove('none');  
    })   
}

