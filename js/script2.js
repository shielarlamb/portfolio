 document.onmousemove = animateCircles;
    function animateCircles (event) {
        const circle = document.createElement("div");
        const colors = ['#ccc', '#6cf', '#eba13a', '#b666d2'];
        
        circle.setAttribute("class", "circle");
        document.body.appendChild(circle);
        
        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';
        
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        circle.style.borderColor = color;
        
        circle.style.transition = "all 0.5s linear 0s";
        
        circle.style.left = circle.offsetLeft - 20 + 'px';
        circle.style.top = circle.offsetTop - 20 + 'px';
        
        circle.style.width = "50px"; 
        circle.style.height = "50px";
        circle.style.borderwidth = "1px";
        circle.style.opacity = 0;
        
    }