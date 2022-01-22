// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }

  // Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


  var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9"]
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
  showSlides(1, 3);
  showSlides(1, 4);
  showSlides(1, 5);
  showSlides(1, 6);
  showSlides(1, 7);
  showSlides(1, 8);

  
  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }
  
  function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }

  // Progress Bar
  function move() {
    var elem = document.getElementById("myBar1");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  
