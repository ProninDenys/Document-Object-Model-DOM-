// Playlist
const playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
];

const playlistElement = document.querySelector('#playlist tbody');

playList.forEach(function(song, index) {
    const row = document.createElement('tr');
    row.classList.add('product');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${song.author}</td>
        <td>${song.song}</td>
    `;
    playlistElement.appendChild(row);
});

// Modal window
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalBtn2 = document.getElementById("closeModalBtn2");

// Open the modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal by clicking on <span> (x)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal by clicking on the "Close" button
closeModalBtn2.onclick = function() {
    modal.style.display = "none";
}

// Close the modal by clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Traffic light
const lights = document.querySelectorAll('.light');
let currentIndex = 0;

document.getElementById('changeLightBtn').addEventListener('click', function() {
    lights[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % lights.length;
    lights[currentIndex].classList.add('active');
});

// Initialize the first light as active
lights[currentIndex].classList.add('active');
