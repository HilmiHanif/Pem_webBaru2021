var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];

function showBaranag () {
    var listBarang = document.getElementById("list-branag");
    // Clear list barang
    listBarang.innerHTML = " ";

    //Cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";
        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>"; 
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}
function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}
