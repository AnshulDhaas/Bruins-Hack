
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

function uploadImage() {
    var formData = new FormData();
    var fileInput = document.getElementById('file-upload');
    formData.append('image', fileInput.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById('output').innerText = 'Detected objects: ' + data.objects;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
