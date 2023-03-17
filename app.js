let sonuc = document.querySelector(".sonuc");
let optButtton = document.querySelectorAll(".optButton");
let rkmButton = document.querySelectorAll(".rkmButton");
let clear = document.querySelector(".clear");
let esittir = document.querySelector(".esittir");

clear.onclick = function(element){
    sonuc.value = "0";
    location.reload();
};
rkmButton.forEach(function(element){
    element.onclick = function(e){
        if (sonuc.value == "0") {
            sonuc.value = "";
        }
        sonuc.value += this.textContent;
    };
});
optButtton.forEach(function(element){
    element.onclick = function(e) {
        sonuc.value += this.textContent;
    };
});
esittir.onclick = function (element){
    sonuc.value = eval(sonuc.value);
};