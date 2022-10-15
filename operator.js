// / OPERATOR PERBANDINGAN 
// >     : LEBIH DARI 
// <     : KURANG DARI 
// >=    : LEBIH DARI SAMA DENGAN 
// <=    : KURANG DARI SAMA DENGAN 
// ==    : SAMA DENGAN 
// ===   : SAMA DENGAN DAN SAMA TIPE 
// !=    : TIDAK SAMA DENGAN 
// !==   : TIDAK SAMA DENGA ATAU SAMA TIPE 
/*
let result = 5 == "5";
console.log( result );

result = 4 === "4";
console.log( result );

result = 4 > 5;
console.log(result);

result = 5 < 10;
console.log(result);

result = 5 != 5 ;
console.log(result);

result = 3 !== 3 ;
console.log(result);
*/

// OPERATOR LOGIKA
// &&      : DAN
// ||      : ATAU 
// !       : KEBALIKAN
/*
const jum_nilai = 100;
const jum_absen = 10;

const lulusNilai = jum_nilai > 80;
const lulusAbsen = jum_absen > 15;

const a = lulusNilai;
const b = lulusAbsen;
console.log( a , b );
console.log( a && b);
console.log( a || b );
*/

// CONSOLE METHOD//
// console.info atau log()  : memeberitahu informasi
// console.warn()  : memberitahu informansi peringatan
// console.error() : memberitahu informasi error 
// console.table() : memberitahu informasi dalam bentuk tabel 

// STRING TEMPLATE//
/*
const bulan = "desember";
const tahun = 2002;
const tgl = 22;
const nim = 210030315;
const nama = "i made tisna adhistara";

const tempalte = `biodata : ${nama}, ${nim}, ${bulan}, ${tgl}, ${tahun}`;
console.log(tempalte);

console.warn(nama);
*/
// KODE EXPRESSION DI STRING TEMPLATE
/*
const namData = "made tisna";
const nim_mhs = 210030315;
const jumNilai_a = 80;
const jumNilai_b = 5;

const x = `nama : ${namData} , nim  : ${nim_mhs} , ${jumNilai_a} , ${jumNilai_b} , ${jumNilai_a >= 50} , ${jumNilai_b <= 10}`;
console.log(x);
*/

// MULTILINE STRING 
/*
const multiline = `nama saya, 
made tisna adhistara, 
dari singaraja`;

console.log(multiline);
*/



// KONVRENSI STRING DAN NUMBER

// FUNCTION
// parseInt(string)     : menkonvresi dari string ke number (bilangan bulat)
// parseFloat(string)   : menkonvresi dari string ke number (bilangan pecahan)
// Number(string)       : menkonvresi dari string ke number (bilangan bulat atau pecahan)
// number.toString()    : menkonvresi dari number ke string

/*
const value1 = parseInt("1");
const value2 = 1;

const jum = value1 + value2;
console.log(jum);

console.log( parseInt("1.1") );
console.log( parseFloat("1.2") );
console.log( Number("2.2") );

const a = 2;
const b = 3;
const total = a.toString() + b.toString();
console.log(total);

let x = 2;
let c = 3;

let hasil = x + c;
console.log(hasil);
let originalResult = hasil;
*/

// kode NaN 

// console.log(`${parseInt ("12 salah")}`)
// console.log(`${parseFloat ("1.1 text")}`)

// number () tidak akan mentolelir kesalahan pada data 
 
// console.log(`${Number (" 1.1")}`)
// console.log(`${Number ("1 tes")}`)
// console.log(`${Number ("1.made")}`)

// operasi pada nan 
/*
const nilai1 = Number("20.salah")
const nilai2 = 100
const jum = nilai1 + nilai2

console.log(`${jum}`)
*/

// isNaN() function
// - mengecek subuah number itu nan atau bukan
// - hasilnya berupa boolean
/*
const data1 = Number("10.salah")
const data2 = 200
const data3 = Number(100)
const jumD = data1 + data2
const jumD2 = data2 + data3
console.log(`${isNaN(jumD)} , ${isNaN(jumD2)}`)
*/
                    // *TIPE DATA ARRAY*
// tipe data array => yg berisikan kumpulan data 
// cara kerja pada array = setiap data disimpan secara berurutan dari 0
// setiap data menambah ke posisi ke terakhir
// kita bisa memasukan array ke dalam array jika kira mau
// kita bisa memasukan berbagi jenis data yang kita mau
/*
let arraykosong = []
let nama = ["putu" , 1 , true , false]
console.log(nama)


const names = [];
names.push(12 , 22 , 25)
names.push("made" , "tisna" , "nyoman" )
console.table(names)
*/

// OPERASI DI ARRAY
// 1.  array.push(value)         = menambah data ke array
// 2.  array.length              = untuk mendapatkan panjang array
// 3.  array[index]              = mendapatkan data di posisi index 
// 4.  array[index]=value        = mengubah data di posisi index
// 5.  delete array[index]        = meghapus data di posisi index, namun index tidak bergeser

/*
const data = [];
data.push( 12, 13, 14, 16, 18, 20, 30, ) //menambahkan data pada array

console.table(data)
 
delete data[2] //menghapus data pada array
data[5] = 200   //mengubah data pada array
data.push(10000)
console.table(data)
*/

                // TIPE DATA OBJECT 
// tipe data yang mirip dengan tipe data array 
// yang membedakan = index pada tipe data object bisa menggunakan string 
// index di object biasanya disebut atributes atau properties, bukan index 
/*
const orang = {};
orang["nama"]   = "made tisna"
orang["nim"]    = 210030315
orang["alamat"] = "nusa dua"
orang["umur"]   = 19

console.table(orang)
*/


            // cara langsung memasukan datanya
/*           
const person ={
    nilai : 100,
    absen : 'hadir',
    asal : 'singaraja',
    "nama lengkap" : "i made tisna adhistara"
};
 

            // mengakses prooerty object 

console.log(`nilai : ${person.nilai}`)
console.log(`absen : ${person.absen}`)
console.log(`asal : ${person.asal}`)
console.log(`nama lengkap : ${person["nama lengkap"]}`)
console.table(person)



                // IF EXPRESSION 
// => dalam js, if adalah satu kata kunci yang digunakan untuk percabangan
// => percabangan = kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
// => hampir di semua bahasa pemrograman mendukung if expression 
/*
const nilai = 80 

if (nilai >= 70){
    console.log("naisss")
}
*/

                // ELSE EXPRESSION
// => block if akan dieksekusi ketika kondisi if bernilai true
// => kadang kita ingin melakukan eksekusi program tertentu jika kondisi if bernilai false
// => hal ini bisa dilakukan menggnakan else expression 
/*
const absen = 25

if (absen >= 20) {
    console.log("lulus")
} else {
    console.log("tidak lulus")
}
*/


            // ELSE IF EXPRESSION 
// => kadang dalam if, kita butuh membuat beberapa kondisi
// => kasus seperti ini, di JS kirta bisa menggunakan else if expression 
/*
const nilaiSiswa = 69

if (nilaiSiswa >= 90) {
    console.log("sangat baik")
} else if (nilaiSiswa >= 80){
    console.log("bagus")
} else if (nilaiSiswa >= 70){
    console.log("cukup")
} else {
    console.log("remidi")
}
*/

                // *POUP*
        // == alert, prompt dan confirm ==
// => JS memiliki fitur yang bernama alert, prompt dan comfirm
// => alert digunakan untuk memberikan peringatan berupa popup text di browser
// => prompt digunakan unutk meminta input string dari pengguna browser dalam bentuk popup input text
// => confirm digunakan untuk meminta boolean dari pengguna browser dalam bentuk popup input pilihan 

//  alert("welcome back")   => ini alert
/*
const masuk = confirm("anda yakin mau masuk....?")

if (masuk){
    const name = prompt("siapa nama anda....?")
        alert(`halo ${name}`)
} else {
        alert("bye bye")
}
*/

                // ===     undefined    ====
// => undifend adalah sebuah kata kunci di JS
// => undifend merupakan sebuah tipe Data 
// => sebuah variable yang belum ditambahkan nilai, maka artinya variable tersebut merupakan tipe undefined
// => kadang untuk programer JS pemula undefined ini agak sedikit membingungkan
// => undefined itu berbeda dengan null di bahasa pemrogrman lain 
/*
const  nama = "made"
if (nama === undefined){
    alert("undefined")
} else {
    alert("defined")
}
*/

/*
let siswa 
if (siswa === undefined){
    alert("undefined")
} else {
    alert("defined")
}
 */

    // UNDEFINED ARRAY VALUE 
/*
const dataNama = ["made", "tisna", "adhistara"]
dataNama[2] = undefined
if (dataNama[2] === undefined){
    console.log("tidak terbaca")
} else {
    console.log(`hello ${dataNama[2]}`)
}
*/

    // UNDEFINED OBJECT PROPERTY 
/*
const mahasiswa = {
    nama : "made tisna adhistara"

}
if (mahasiswa.absen === undefined){
    console.log("undefined")
} else {
    console.log("defined")
}
*/

            // NULL 
// => null merupakan reprentasi data kosong 
// => null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja valuenya NULL 
// => sedangkan undefined adalah bavriable belum ditambahkan value apapun 

/*
let dtsiswa = null 

if (dtsiswa === undefined){
    console.log("undefined")
} else if (dtsiswa === null){
    console.log("null")
} else {
    console.log(dtsiswa)
}
*/

/*
const biodata ={
    nama : "i made tisna adhistara",
    nim  : 210030315,
    tempat_lahir  : "denpasar",
    tanggal_lahir : "22-desember-2002",
    alamat : "nusa dua",
    nilai : 100,
    absen : "terpenuhi"
};
function listBiodata() {

    console.log(`nama : ${biodata.nama}`)
    console.log(`nim : ${biodata.nim}`)
    console.log(`tempat lahir : ${biodata.tempat_lahir}`)
    console.log(`tanggal lahir : ${biodata.tanggal_lahir}`)
    console.log(`alamat : ${biodata.alamat}`)
    console.log(`nilai : ${biodata.nilai}`)
    console.log(`absen : ${biodata.absen}`)
};

listBiodata ();
*/




  


