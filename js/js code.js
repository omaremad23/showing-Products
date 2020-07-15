 var itemImg = document.getElementsByClassName('item-img');
 ImgArr = [];
 var hiddencontainer = document.getElementById('hidden')
 
 var hiddenImg = document.getElementById('hidden-img')
 var currentIndex=0;
 var imgSrc
 


 for (i = 0; i < itemImg.length; i++) {

     ImgArr.push(itemImg[i]);

 }



 for (i = 0; i < ImgArr.length; i++) {
     ImgArr[i].addEventListener('click', function viewImg(e) {


         imgSrc = e.target.getAttribute('src');
         hiddenImg.setAttribute('src', '' + imgSrc + '');
         hiddencontainer.style.opacity = "1";
         hiddencontainer.style.zIndex = "1";
         currentIndex=ImgArr.indexOf(e.target)
         
     })


 }




 hiddencontainer.addEventListener('click', function (e2) {
            
           
    if ((e2.target.getAttribute('id') == 'hidden') || (e2.target.getAttribute('id') == 'close')) {
        hiddencontainer.style.opacity = "0";
        hiddencontainer.style.zIndex = "-1";
    } else if ((e2.target.getAttribute('id') == 'left')&&(currentIndex>0)) {
        currentIndex--;
       imgSrc =ImgArr[currentIndex].getAttribute('src');
       hiddenImg.setAttribute('src', '' + imgSrc + '');
       
       console.log(currentIndex)
       

    } else if ((e2.target.getAttribute('id') == 'right') && (currentIndex<(ImgArr.length-1))) {
        currentIndex++;
        imgSrc =ImgArr[currentIndex].getAttribute('src');
        hiddenImg.setAttribute('src', '' + imgSrc + '');
        
        console.log(currentIndex)
        
    }
    
})


document.addEventListener('keydown', function (e3) {
            
    if (e3.keyCode==37)/*left*/ {
       
        imgSrc =ImgArr[(currentIndex-1)].getAttribute('src');
        hiddenImg.setAttribute('src', '' + imgSrc + '');
        currentIndex--;
        console.log(currentIndex)
        
 
     }
     else if (e3.keyCode==39) /*right*/ {

        imgSrc =ImgArr[(currentIndex+1)].getAttribute('src');
        hiddenImg.setAttribute('src', '' + imgSrc + '');
        currentIndex++;
        console.log(currentIndex)
        
    }
    else if (e3.keyCode==27) {
        hiddencontainer.style.opacity = "0";
        hiddencontainer.style.zIndex = "-1";
    }

   
    
})
