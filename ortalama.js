// vize1 %30, vize2 %30, final %40

let vize1 = Number(prompt("Lütfen birinci vize notunuzu giriniz: "));
let vize2 = Number(prompt("Lütfen ikinci vize notunuzu giriniz: "));
let final = Number(prompt("Lütfen final notunuzu giriniz: "));

let ortalama = vize1*0.3 + vize2*0.3 + final*0.4;

if (ortalama>50){
    console.log("Tebrikler, dönemi başarıyla geçtiniz :) <br> Ortalama: " + ortalama)
}else{
    console.log("Üzgünüm, kaldınız... :/ <br> Ortalama: " + ortalama)
}