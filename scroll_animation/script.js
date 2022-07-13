const inViewport = ( element ) =>{
     let relativePosition = element.getBoundingClientRect();
     return !(relativePosition.top > innerHeight || relativePosition.bottom < 0);
    
  }


const boxes = document.querySelectorAll('.box');

document.addEventListener( 'scroll', event => {
 
    boxes.forEach(box => {
        (inViewport( box )) ? box.classList.add('active') : box.classList.remove('active'); 
    });
   
    
  })

