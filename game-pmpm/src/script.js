function updateTampilan() {
    document.getElementById("skor").innerText = currentScore;
    
    // --- Logika Penamaan Level ---
    let levelName = "";
    if (soalLevelSaatIni === 1) levelName = "Pelatihan Astronaut";
    else if (soalLevelSaatIni === 2) levelName = "Navigasi Asteroid";
    else if (soalLevelSaatIni === 3) levelName = "Ekspedisi Galaksi";
    else if (soalLevelSaatIni === 4) levelName = "Penjelajahan Alam Semesta";
    else levelName = `Misi Kosmik Level ${soalLevelSaatIni}`;

    // 1. Update elemen level standar (yang sudah ada)
    const levelKecil = document.getElementById("level-info");
    if (levelKecil) {
        levelKecil.innerText = `${levelName}`;
    }

    // 2. Update elemen level yang BESAR/KEDUA (Pastikan ID ini ada di HTML Anda!)
    const levelBesar = document.getElementById("level-info-besar");
    if (levelBesar) {
        levelBesar.innerText = `${levelName}`;
    }
    // ----------------------------

    const soalKe = soalDikerjakan + 1;
    document.getElementById("soal-info").innerText = `Soal ke-${soalKe} dari ${SOAL_PER_LEVEL}`;
    
    document.getElementById("jawabanSiswa").focus();
    drawProgress(); 
}