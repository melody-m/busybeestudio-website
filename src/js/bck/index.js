import * as classesUI from './views/classesView';
import * as galleryUI from './views/galleryView';


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


/***************************************************EVENT_LISTENERS*********************************************************/

function setEventListeners(){
    //Loader

    window.addEventListener("load", () => {

        const loaders = document.querySelectorAll('.load');
        const loadersArr = Array.from(loaders);

        loadersArr.forEach((cur)=>{
            cur.style.display = "none";
        })
        document.querySelector('body').classList.remove('noscroll');
      });

    //Menu listener

    const menu = document.getElementById('navi-toggle');
    const menuLinks = document.querySelectorAll('.navigation__link');
    const menuLinksArr = Array.from(menuLinks);

    menuLinksArr.forEach((cur) =>{
        cur.addEventListener('click', () =>{
            menu.checked = false;
        });
    });

    //Course listeners    
    
    classesUI.classesArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {                          
            const ID = getID(e); 
            classesUI.courseExtend(ID);                                          
        })  
    })
    
    classesUI.classesBtnArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {                  
            const bookID = getID(e);
            classesUI.bookDisplay(bookID);
        })
    })
    
    classesUI.classesCloseArr.forEach((cur) => {
        cur.addEventListener('click', classesUI.bookClose)
    })

    classesUI.classesCloseBtnArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {           
            const closeID = getID(e);
            classesUI.courseClose(closeID);
        })
    })

    // //Gallery listeners

    galleryUI.photoGallArr.forEach((cur) => {
        cur.addEventListener('click', (e) => {                  
            const photoID = getID(e);
            galleryUI.photoFullScreen(photoID);                        
        })
    })

    galleryUI.galleryDOM.closeBtn.addEventListener('click', galleryUI.closePhoto);

    galleryUI.galleryDOM.arrR.addEventListener('click', galleryUI.nextPhoto);  
    galleryUI.galleryDOM.arrL.addEventListener('click', galleryUI.previousPhoto);  
}

function init(){
    setEventListeners();
}

init();




