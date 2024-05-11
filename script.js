document.getElementById("giftImage").onclick = function() {
    var firstPart = document.getElementById("firstPart");
    var secondPart = document.getElementById("secondPart");
    var giftImage = document.getElementById("giftImage");
    if (secondPart.style.display === "none") {
        firstPart.style.opacity = "0"; // Erster Teil des Textes verblassen
        firstPart.style.transform = "translateY(-20px)"; // Leichte Verschiebung nach oben
        secondPart.style.display = "block"; // Zweiter Teil des Textes einblenden
        secondPart.style.opacity = "1"; // Zweiter Teil des Textes einblenden
        secondPart.style.transform = "translateY(0)"; // Zurücksetzen der Position
        giftImage.src = "flower.jpeg"; // Bild ändern
        giftImage.alt = "Blumenstrauß";
    } else {
        firstPart.style.opacity = "1"; // Erster Teil des Textes einblenden
        firstPart.style.transform = "translateY(0)"; // Zurücksetzen der Position
        secondPart.style.opacity = "0"; // Zweiter Teil des Textes verblassen
        secondPart.style.transform = "translateY(-20px)"; // Leichte Verschiebung nach oben
        giftImage.src = "gift.jpeg"; // Bild ändern
        giftImage.alt = "Geschenk";
        secondPart.style.display = "none"; // Zweiter Teil des Textes ausblenden
    }
};
