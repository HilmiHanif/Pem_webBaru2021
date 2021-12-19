// Latihan if else
let password = prompt("Password :");
if (password == "hilmi123"){
    document.write("<h2>Selamat datang Hilmi Hanif</h2>");
} else {
    document.write("<p>Password salah, coba lagi!</p>");
}
document.write("<p> Terimaksih sudah Berkunjung!</p>");

// Latihan switch case
var item = prompt ('Masukan Nama Makanan/Minuman : \n (cth: Nasi, Tahu, Tempe, Pizza, Humberger, softdrink)');
switch(item) {
    case 'Nasi':
    case 'Tahu':
    case 'Tempe':
        alert ('Makanan Sehat');
        break; 
    case 'Pizza' :
    case 'Humberger' :
    case 'softdrink' :
        alert('Makanan dan Minuman tidak sehat')
        break;
    default :{
        alert('Makanan dan minuman  tidak tesedia');
    }
} 

// Latihan menampilkan html dari js ke web browser
const mhs = {
    nama : "Hilmi Hanif",
    semester : 1,
    mataKuliah : ["Dasar Pemrogaman", "Kalkulus 1", "Matematika Diskrit", "Pemrogaman Berbasis Web", "Dasar Komputasi"]
};
function cetakMataKuliah(mataKuliah){
    return `<ol> ${mataKuliah.map(mk => `<li>${mk}</li>`).join("")}</ol>`
}
const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span Class= "semester">${mhs.semester}</span>
<h4>Mata Kuliah</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`
document.body.innerHTML = el;


// Latihan mencari angka (Lihat pada console)
//cari angka > 5
//Kalikan 3
// jumlahkan
const angka = [-1, 8, 9, 1,-5, -4, 3,2 ,9];
const newAngka = angka.filter( a => a > 5)
.map(a => a * 3).reduce((acc,curr) => acc + curr);
console.log(newAngka);


//Latihan tagged tamplate(Lihat pada console) 
const nama = "Hilmi Hanif";
const umur = 33;
function coba(hallo, ...value){
    return hallo.reduce((result, str, i)=> `${result}${str}${value[i] || ""}`, "") 
}
const str = coba`Hallo nama saya adalah ${nama}, umur saya ${umur} Tahun`;
console.log(str);