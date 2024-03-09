document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('loading-text');
    const textToType = "<div style='display: inline-block;'><img src='bios1.png' alt='bios'></div>" +
                      "<div style='display: inline-block; vertical-align: top;'>\tINESS TKHAYYARE V1.0 2024\n \tPORTFOLIO NUMÉRIQUE\n</div>" +
                      "\nInstitution \t\t\t\t\t\t :ENSA Toulouse\n" +
                      "Spécialité \t\t\t\t\t\t :Architecture + Numérique\n" +
                      "Temps passé à concevoir \t\t :100000\n" +
                      "RAM Cérébrale \t\t\t\t\t :Faible\n" +
                      "Années d'études complétées \t :4.5 (90%)\n\n" +
                      "\nPressez ENTREE pour commencer.";


    let index = 0;
    let typingInterval;

    function type() {
        if (index <= textToType.length) {
            textElement.innerHTML = textToType.slice(0, index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }

    // Typewriting effect
    typingInterval = setInterval(type, 50);

    // Redirect to a new page on 'Enter' key press
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            redirectToNewPage();
            clearInterval(typingInterval);
        }
    });

    // Redirect to a new page
    function redirectToNewPage() {
        window.location.href = 'home.html';
    }
});

