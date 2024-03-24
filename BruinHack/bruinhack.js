
function handleClick(buttonId) 
{
    alert('Button ' + buttonId + ' clicked!');
}

function aboutUsPage() 
{
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = "Anshul Dhaas";
    contentElement.style.fontFamily = "Arial";
    contentElement.style.fontSize = "20px";
}

function home()
{
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatum! Atque iure, quisquam nesciunt repudiandae corporis sequi? Sunt, culpa illum architecto, ipsum nesciunt eveniet accusantium dicta assumenda quis facere blanditiis?";
}
