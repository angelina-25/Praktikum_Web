document.addEventListener("DOMContentLoaded", () => {
    //  Dark Mode 
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "🌙 Dark Mode";
    toggleBtn.classList.add("btn", "btn-primary");
    document.querySelector("header").appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleBtn.textContent = document.body.classList.contains("dark-mode")
            ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    //  Tambah Tombol Beli di setiap Produk 
    const produkCards = document.querySelectorAll(".card");
    produkCards.forEach(card => {
        const btnBeli = document.createElement("button");
        btnBeli.textContent = "🛒 Beli";
        card.appendChild(btnBeli);

        btnBeli.addEventListener("click", (e) => {
            e.stopPropagation(); // supaya tidak trigger alert produk
            const namaProduk = card.querySelector("h3").textContent;
            alert(`Anda membeli: ${namaProduk}\nTerima kasih sudah berbelanja di Toko Sport!`);
        });
    });

    //  Alert saat klik Card Produk 
    produkCards.forEach(card => {
        card.addEventListener("click", () => {
            const namaProduk = card.querySelector("h3").textContent;
            alert(`Detail Produk: ${namaProduk}`);
        });
    });

   //  Pencarian Produk 
const searchInput = document.getElementById("searchInput");

// Buat elemen pesan "tidak ditemukan"
const noResultMsg = document.createElement("p");
noResultMsg.textContent = " Produk tidak ditemukan";
noResultMsg.style.display = "none"; // disembunyikan dulu
noResultMsg.style.fontWeight = "bold";
noResultMsg.style.color = "red";

// Tambahkan pesan ke bawah search box
searchInput.insertAdjacentElement("afterend", noResultMsg);

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    let adaHasil = false;

    produkCards.forEach(card => {
        const nama = card.querySelector("h3").textContent.toLowerCase();
        if (nama.includes(keyword)) {
            card.style.display = ""; // tampilkan sesuai default grid
            adaHasil = true;
        } else {
            card.style.display = "none"; // sembunyikan
        }
    });

    // Tampilkan pesan kalau tidak ada hasil
    noResultMsg.style.display = adaHasil ? "none" : "block";
});

    // Testimoni Pelanggan (DOM Manipulation) 
    const testimoniList = document.getElementById("testimoni-list");
    const testimoniData = [
        { nama: "Dewi", pesan: "Sepatunya nyaman banget dipakai lari!" },
        { nama: "Ayu", pesan: "Pengiriman cepat, barang sesuai gambar." },
        { nama: "Intan", pesan: "Jersey volinya keren dan adem dipakai." }
    ];

    testimoniData.forEach(testi => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h4>${testi.nama}</h4><p>"${testi.pesan}"</p>`;
        testimoniList.appendChild(div);
    });


});
