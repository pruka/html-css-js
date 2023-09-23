// armstrong numbers

let sayi = prompt("lütfen armstrong mu diye kontrol edilecek olan sayıyı giriniz:")
let toplam = 0
for(i=0;i<sayi.length;i++){
    toplam += Number(sayi.charAt(i))**3

}
if(toplam==sayi){
    alert("armstrong bir sayıdır. Toplam: " + toplam)
}else{
    alert("armstrong bir sayı değildir. Toplam: " + toplam)
}
