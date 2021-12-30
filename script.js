const txtElement = ['PUTRI...', 'Mungkin terlalu cepat untukku katakan ini', 'Kau pun tau masalaluku seperti apa, tetapi..', 'Aku tidak bisa berbohong pada diriku sendiri, yang setiap di dekatmu aku merasa nyaman.', 'Izinkan aku membuktikan, Inilah kesungguhan rasa', 'Izinkan Aku Menyayangimu', ' Yang lalu biarlah yang lalu menjadi masa lalu. Namun, untuk masa kini, maukah kau menjadi masa depanku?'];
let count= 0;
let txtIndex= 0;
let currentTxt= '';
let words= '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt =txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 400);

})();