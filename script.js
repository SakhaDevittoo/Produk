let semuaProduk = [];

fetch("produk.json")
.then(res => res.json())
.then(data => {

    semuaProduk = data;

    tampilkanProduk(data);

});

function tampilkanProduk(data){

    const container =
    document.getElementById(
    "produk-container");

    container.innerHTML = "";

    data.forEach(produk => {

        container.innerHTML += `
        <div class="card"
        onclick="window.open(
        '${produk.link}',
        '_blank')">

        <img src="${produk.gambar}">

        <div class="nama">
        ${produk.id}.
        ${produk.nama}
        </div>

        </div>
        `;

    });

}

document
.getElementById("search")
.addEventListener(
"input",
function(){

const keyword =
this.value.toLowerCase();

const hasil =
semuaProduk.filter(
produk =>
produk.id
.toString() === keyword
);

tampilkanProduk(hasil);

});