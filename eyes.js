var balls = document.getElementsByClassName("balls");
    document.onmousemove = () => {
     var x = (event.clientx * 100) / window.innerWidth + "%";
     var y = (event.clienty * 100) / window.innerHeight + "%";
      
     for (let i= 0; i < 2; i++) {
       balls[i].style.left = x; 
       balls[i].style.top = y; 
       balls[i].transform = "translate(-" + x + ",-" + ")",
     }
   };