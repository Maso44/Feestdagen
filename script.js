window.onload = function() {
    // API endpoint voor de volgende feestdagen in Nederland
    var apiUrl = 'https://date.nager.at/Api/v2/NextPublicHolidays/NL';

    // Haal de data op van de API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Controleer of er feestdagen zijn gevonden
            if (data && data.length > 0) {
                // Maak een lege lijst om feestdagen weer te geven
                var feestdagenHTML = '<h2>Volgende feestdagen in Nederland:</h2><ul>';

                // Loop door alle gevonden feestdagen
                data.forEach(feestdag => {
                    // Voeg elke feestdag toe aan de lijst
                    feestdagenHTML += '<li><strong>Naam:</strong> ' + feestdag.name + ', <strong>Datum:</strong> ' + feestdag.date + '</li>';
                });

                // Sluit de lijst af
                feestdagenHTML += '</ul>';

                // Toon de feestdagen op het dashboard
                var feestdagenElement = document.getElementById('feestdagen');
                feestdagenElement.innerHTML = feestdagenHTML;
            } else {
                // Als er geen feestdagen zijn gevonden
                var feestdagenElement = document.getElementById('feestdagen');
                feestdagenElement.innerHTML = '<h2>Geen feestdagen gevonden</h2>';
            }
        })
        .catch(error => {
            console.error('Er is een fout opgetreden bij het ophalen van de feestdagen:', error);
        });
};
