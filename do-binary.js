let sayi = prompt("bana bir sayı ver onu sana binary sayı yapayım");

function doBinary(sayi){
    let binary = "";
    while(true){
        binary += sayi%2
        sayi = Math.floor(sayi/2)
        if(sayi==1){
            binary += 1
            break
        }
    }
    
    alert("binary kod: " + reserve(binary))
}

function reserve(binary){
    reserveBinary = ""
    for(let i = String(binary).length-1; i>=0; i--){
        reserveBinary += String(binary).charAt(i)
    }
    return reserveBinary
}
doBinary(sayi)