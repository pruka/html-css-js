let binarySayi = prompt("bana bir binary kod gir: ");
sonuc = 0;
ust = 0;
for(let i = binarySayi.length-1; i >= 0; i--){
    let index = binarySayi.charAt(i);
    let ussu = 2**ust;
    ust += 1
    sonuc += index*ussu;
}
alert("binary kod: " + binarySayi + " decimal kod: " + sonuc)