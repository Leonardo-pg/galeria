/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     let img = document.getElementById("image");
     console.log('Image hovered or focused: ' + previewPic.alt);
   
          img.style.backgroundImage = `url(${previewPic.src})`;
   
          img.textContent = previewPic.alt;
       }
   

       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       console.log('Mouse left or focus lost');
       let img = document.getElementById("image");
          img.style.backgroundImage = ""; 
          img.textContent = "Hover over an image below to see the preview.";   	
       }
   
       function addTabindex() {
        const images = document.querySelectorAll('.preview');
        images.forEach(function(image) {
            image.setAttribute('tabindex', '0');
        });
        console.log("Tabindex attribute added to images");
    }
    
    // Call the addTabindex function when the page loads
    window.onload = addTabindex;
    
  
  