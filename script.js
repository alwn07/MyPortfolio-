function showPanel() {
    document.getElementById('side-panel').style.left = '0';
}

function hidePanel() {
    document.getElementById('side-panel').style.left = '-250px';
}

 var modal = document.getElementById("myModal");

 var images = document.querySelectorAll('.gallery .image img');

 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");

 images.forEach(image => {
     image.onclick = function() {
         modal.style.display = "block";
         modalImg.src = this.src;
         captionText.innerHTML = this.alt;
     }
 });

 var span = document.getElementsByClassName("close")[0];

 span.onclick = function() { 
     modal.style.display = "none";
 }


 function toggleAudio() {
    const audio = document.getElementById("bikeAudio");
    const bikeItem = document.querySelector(".hobby-item");

    if (audio) {
        audio.play().then(() => {
            bikeItem.classList.add('active');
        }).catch((error) => {
            console.error("Error playing audio: ", error);
            alert("Sorry, something went wrong with the audio playback.");
        });
    } else {
        console.error("Audio element not found!");
    }
 }

 function toggleAudio() {
    const audio = document.getElementById("bikeAudio");
    const bikeItem = document.querySelector(".hobby-item");

    if (audio) {
        audio.play().then(() => {
            bikeItem.classList.add('active');
        }).catch((error) => {
            console.error("Error playing audio: ", error);
            alert("Sorry, something went wrong with the audio playback.");
        });
    } else {
        console.error("Audio element not found!");
    }
 }
