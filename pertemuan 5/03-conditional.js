// conditional
let umur = 21

if (umur >= 20) {
    console.log("silahkan")
} else {
    console.log("pergi kau")
}

// multiple condition dengan if=else
let nilai = 81

if (nilai >= 95) {
    console.log("nilai A")
} else if (nilai >= 85) {
    console.log("nilai b")
} else if (nilai >= 80) {
    console.log("nilai c")
} else {
    console.log("gagal")
}

// hitung diskon
let belanja = 700_000
let diskon = 0

if (belanja >= 650_000) {
    diskon = 0.25
} else if (belanja >= 500_000) {
    diskon = 0.15
} else {
    diskon + 0
}

let totaldiskon = belanja * diskon
let totalharga = belanja - totaldiskon

console.log(`Total Belanja: Rp${belanja}`)
console.log(`Total Diskon: Rp${totaldiskon}`)
console.log(`Total Harga: Rp${totalharga}`)