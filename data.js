/*
const nama = 'made tisna adhistara';
let usia = 11;

let biodata = document.getElementById('biodata');  

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = 'generasi remaja';
    } else if (usia > 5 &&  usia < 10) {
        generasi = 'genarasi anak-anak';
    } else if (usia >= 19 ) {
        generasi = 'genarasi dewasa';
    } else {
        genarasi = 'genarasi balita';
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);
generateBiodata();
*/



let dataSiswa = document.getElementById("dataSiswa");

function biodataSiswa () {
    const siswa ={
        nama             : 'I MADE TISNA ADHISTARA',
        tempatLahir      : 'DENPASAR',
        tglLahir         : '22-DESEMBER 2002',
        alamat           : 'NUSA DUA',
        asal             : 'SINGARAJA',
        agama            : 'HINDU',
        golDarah         : 'B',
        kewarganegaraan  : 'WNI',
        jenisKelamin     : 'LAKI-LAKI',
        pekerjaan        : 'MAHASISWA',
        statusPerkawinan : 'BELUM'        
    }
    
    let dataDiri 

    dataDiri = `NAMA                : ${siswa.nama} </br> 
                TEMPAT LAHIR        : ${siswa.tempatLahir} </br> 
                TGL LAHIR           : ${siswa.tglLahir} </br>
                ALAMAT              : ${siswa.alamat} </br>
                ASAL                : ${siswa.asal} </br>
                AGAMA               : ${siswa.agama} </br>
                GOL DARAH           : ${siswa.golDarah} </br>
                KEWARGANEGARAAN     : ${siswa.kewarganegaraan} </br>
                JENIS KELAMIN       : ${siswa.jenisKelamin} </br>
                PEKERJAAN           : ${siswa.pekerjaan} </br>
                STATUS PERKWAINAN   : ${siswa.statusPerkawinan} </br> `;

    return dataSiswa.innerHTML = dataDiri; 
}
biodataSiswa();