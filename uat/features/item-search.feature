# language:de

Funktionalität: Suche nach items

  Als Anwender möchte ich nach Items suchen können.

  Grundlage: Bereitstellung der Dropdown-Inhalte
    Angenommen die Kundin befindet sich auf der Seite Item-Suche
    # Angenommen ein Pact Mock Provider für "arbeitgeber-veranstaltungen-service" ist mit dem Pact File "veranstaltungen-auflisten" für den Endpoint "veranstaltungen" konfiguriert

  Szenario: Eine Suche ohne Krierium ist möglich
    Wenn die Kundin den Button 'Search Items' betätigt
    Dann werden 3 Items angezeigt

  #Szenario: Auto-Suche nach Screwdriver funktioniert
