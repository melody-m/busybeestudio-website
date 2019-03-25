export const galleryDOM = {
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

export const photoGallArr = Array.from(galleryDOM.photoGallery);


export function getImgID(){
    const fullImg = document.querySelector('.gallery__img');
    const fullImgID = fullImg.id; 
    const splitID = fullImgID.split('-');
    const imgID = splitID[1];

    return imgID;
}


export function addFigure(id){

    const newHtml = `<figure class="gallery__figure">
            <img src="img/gallery/gallery-${id}.jpg"
                 alt="${galleryDOM.figcaption['img'+id]}"
                 class="gallery__img"
                 id="img-${id}">
            <figcaption class="gallery__caption">${galleryDOM.figcaption['img'+id]}</figcaption>
            </figure>`;
    const newHtmlMed = `<figure class="gallery__figure">
            <img src="img/gallery/gallery-${id}-med.jpg"
                 alt="${galleryDOM.figcaption['img'+id]}"
                 class="gallery__img"
                 id="img-${id}">
            <figcaption class="gallery__caption">${galleryDOM.figcaption['img'+id]}</figcaption>
            </figure>`;

    const newHtmlSmall = `<figure class="gallery__figure">
            <img src="img/gallery/gallery-${id}-small.jpg"
                 alt="${galleryDOM.figcaption['img'+id]}"
                 class="gallery__img"
                 id="img-${id}">
            <figcaption class="gallery__caption">${galleryDOM.figcaption['img'+id]}</figcaption>
            </figure>`;


    if (window.matchMedia("(max-width: 600px)").matches) {
        galleryDOM.fullImg.insertAdjacentHTML('beforeend', newHtmlSmall);         
    } else if (window.matchMedia("(max-width: 900px)").matches) {
        galleryDOM.fullImg.insertAdjacentHTML('beforeend', newHtmlMed);             
    } else {
      galleryDOM.fullImg.insertAdjacentHTML('beforeend', newHtml) ; 
    }
}

export function removeFigure(){
    const imgFigure = document.querySelector('.gallery__figure');            
    imgFigure.parentNode.removeChild(imgFigure);    
}

export function photoFullScreen(ID) {

    galleryDOM.fullScreen.style.visibility = 'visible';
    addFigure(ID);
}


export function closePhoto(){
    galleryDOM.fullScreen.style.visibility = 'hidden';  
    removeFigure();
}

export function nextPhoto(){    

    const ID = getImgID();   
    const nextID = parseInt(ID) +1;

    if(ID < 10 ){        
        removeFigure();
        //Add next one
        addFigure(nextID);    
    }
}

export function previousPhoto(){

    const ID = getImgID();   
    const previousID = parseInt(ID) -1;
    if(ID > 1){        
        removeFigure();
        //Add next one
        addFigure(previousID);
    }
}