// merubah syle pada JS
const judul = document.getElementById("judul");
judul.innerHTML = "Hilmi Hanif";
judul.style.backgroundColor = "gold";
setInterval (function (){
    judul.style.color = "blue";
setTimeout (function () {
    judul.style.color = "red";
}, 500)
}, 1000);

// membuat Elemnet Baru
const pBaru = document.createElement("p");
const tBaru = document.createTextNode("Paragaraf ini dibuat dari JS");
pBaru.appendChild(tBaru);
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);
pBaru.style.backgroundColor = "red";

const liBaru = document.createElement("li");
const tliBaru = document.createTextNode("Item Baru di buat oleh JS");
liBaru.appendChild(tliBaru);
const ul = document.querySelector("section#b ul");
const li = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li);
liBaru.style.backgroundColor = "green";

//replace atau mengganti
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector(".p4");
const tBerjalan = document.createElement("marquee");
const tmarBaru = document.createTextNode("Mengganti Element!!!");
tBerjalan.appendChild(tmarBaru);
sectionB.replaceChild(tBerjalan, p4);
tBerjalan.style.backgroundColor = "Yellow";


// Event pada js
const p2 = document.querySelector(".p2");
p2.addEventListener("click", function(){
    p2.classList.toggle("label");
})

// meanmbahkan elemenat baru jika di click
const p5 = sectionB.querySelector(".p5");
p5.addEventListener("click", function (){
    const itemBaruli = document.createElement("li");
    const titemBaruli = document.createTextNode("Item di Tambahkan");
    itemBaruli.appendChild(titemBaruli);
    ul.appendChild(itemBaruli);
})

