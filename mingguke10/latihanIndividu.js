//Alert
alert("Hallo selamat Datang");

//Menambahkan style
const judul = document.getElementById('judul');
judul.innerHTML =  "Hilmi Hanif";
judul.style.color = "green";
judul.style.backgroundColor = "yellow";

//menambahkan warna
let semuaP = document.querySelectorAll('p');
semuaP[0].style.backgroundColor = 'blue'; 
semuaP[1].style.backgroundColor = 'red'; 


//meanmbahkan paragrah baru
const pBaru = document.createElement('p');
const teksPbaru = document.createTextNode('Ini adalah Paragraf yang dibuat oleh JS');
pBaru.appendChild(teksPbaru);
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//confirm untuk melihat link dengan if 
const link = document.querySelector('a');
link.addEventListener('click', function(){
    let yakin = confirm("Apakah kamu yakin ingin mengunjungi Instagram Saya?");
        if (yakin){
            window.location = "https://www.instagram.com/hani.eef/";
        } else {
            document.write("Tetap disini saja :)");
        }
})

//meanmbahkan item baru jika di click
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const tekslibaru = document.createTextNode('Li Baru diTambahkan');
    liBaru.appendChild(tekslibaru);
    ul.appendChild(liBaru);
})

