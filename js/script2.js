 document.onmousemove = animateCircles;

 function animateCircles(event) {
     const circle = document.createElement("div");
     const colors = ['#ccc', '#6cf', '#eba13a', '#b666d2'];

     circle.setAttribute("class", "circle");
     document.body.append(circle);

     circle.style.left = event.clientX + 'px';
     circle.style.top = event.clientY + 'px';

     const color = colors[Math.floor(Math.random() * colors.length)];
     circle.style.borderColor = color;

     circle.style.transition = "all 0.5s linear 1s";

     circle.style.left = circle.offsetLeft - 100 + 'px';
     circle.style.top = circle.offsetTop - 100 + 'px';

     circle.style.width = "100px";
     circle.style.height = "100px";
     circle.style.borderwidth = "10px";
     circle.style.opacity = 0;

 }

