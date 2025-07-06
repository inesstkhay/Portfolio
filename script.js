document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('loading-text');
    const textToType = "<div style='display: inline-block;'><img src='bios1.png' alt='bios'></div>" +
                      "<div style='display: inline-block; vertical-align: top;'>\tINESS TKHAYYARE V2.0 2025\n \tWORK IN PROGRESS\n</div>" +
                      "\nInstitution \t\t\t\t\t\t :ENSA Toulouse\n" +
                      "Specialty \t\t\t\t\t\t :Architecture\n" +
                      "Design Time Spent \t\t\t\t :100000\n" +
                      "Brain RAM \t\t\t\t\t\t :Low\n" +
                      "PhD Progress  \t\t\t\t\t :1y [██░░░░░░] (33%)\n\n" +
                      "\nPress ENTER or CLICK to begin.";


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
    typingInterval = setInterval(type, 30);

    // Redirect to a new page on 'Enter' key press
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            redirectToNewPage();
            clearInterval(typingInterval);
        }
    });

    if (document.body.classList.contains('chargement')) {
    document.addEventListener('click', function () {
        redirectToNewPage();
    });
}

    // Redirect to a new page
    function redirectToNewPage() {
        window.location.href = 'home.html';
    }
});
