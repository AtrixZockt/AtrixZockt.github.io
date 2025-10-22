document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.querySelector('.lang-switcher');
    const langButtons = {
        de: document.getElementById('lang-de'),
        en: document.getElementById('lang-en')
    };

    const translations = {
        pageTitle: {
            de: "Portfolio von Julian Brückner",
            en: "Portfolio of Julian Brückner"
        },
        navLogo: {
            de: "Julian Brückner",
            en: "Julian Brückner"
        },
        navAbout: {
            de: "Über mich",
            en: "About Me"
        },
        navSkills: {
            de: "Skills",
            en: "Skills"
        },
        navPortfolio: {
            de: "Portfolio",
            en: "Portfolio"
        },
        navContact: {
            de: "Kontakt",
            en: "Contact"
        },
        heroTitle: {
            de: "Game & Software Developer",
            en: "Game & Software Developer"
        },
        heroSubtitle: {
            de: "Leidenschaft für Code, Design und Spiele.",
            en: "Passion for code, design, and games."
        },
        aboutTitle: {
            de: "Über mich",
            en: "About Me"
        },
        aboutText1: {
            de: "Willkommen auf meiner Seite! Ich bin ein passionierter Entwickler mit über 10 Jahren Hobby-Erfahrung in diversen Programmiersprachen und Technologien. Meine professionelle Laufbahn begann bei Bohemia Interactive, wo ich 1,5 Jahre als Technical Designer an spannenden Projekten mitwirken durfte.",
            en: "Welcome to my page! I am a passionate developer with over 10 years of hobby experience in various programming languages and technologies. My professional career began at Bohemia Interactive, where I worked as a Technical Designer on exciting projects for 1.5 years."
        },
        aboutText2: {
            de: "Meine Stärke liegt in der Verbindung von technischem Verständnis und kreativem Design, um einzigartige und funktionale Lösungen zu schaffen. Ich bin stets auf der Suche nach neuen Herausforderungen, um meine Fähigkeiten weiterzuentwickeln und innovative Software zu gestalten.",
            en: "My strength lies in combining technical understanding with creative design to create unique and functional solutions. I am always looking for new challenges to further develop my skills and create innovative software."
        },
        skillsTitle: {
            de: "Meine Skills",
            en: "My Skills"
        },
        skillsCat1: {
            de: "Programmiersprachen",
            en: "Programming Languages"
        },
        skillsCat2: {
            de: "Engines & Frameworks",
            en: "Engines & Frameworks"
        },
        skillsCat3: {
            de: "Tools & Software",
            en: "Tools & Software"
        },
        portfolioTitle: {
            de: "Portfolio",
            en: "Portfolio"
        },
        projectIslandOfBatsTitle: {
            de: "Itch.io: Island of Bats",
            en: "Itch.io: Island of Bats"
        },
        projectIslandOfBatsDesc: {
            de: "Island of Bats ist ein Adventure-Puzzle-Platfromer welches im Ramen des Mini Jam 114 in nur 3 Tagen erstellt wurde. Ein Team von 3 Entwicklern war an diesem Projekt beteiligt.",
            en: "Island of Bats is a adventure puzzle platformer that was created in just three days as part of Mini Jam 114. A team of three developers worked on this project."
        },
        projectLinkPlay: {
            de: "Spielen",
            en: "Play Game"
        },
        projectKATTitle: {
            de: "KAT - Advanced Medical",
            en: "KAT - Advanced Medical"
        },
        projectKATDesc: {
            de: "KAT - Advanced Medical ist eine sehr detailierte Medizinische Modifikation für das Spiel Arma 3. Als part eines 9 Köpfigen Teams, bin ich mit dafür verantwortlich neue Features zu entwerfen und einzubauen.",
            en: "KAT - Advanced Medical is a highly detailed medical modification for the game Arma 3. As part of a nine-person team, I am responsible for designing and implementing new features."
        },
        projectDICETitle: {
            de: "Tavern Dice",
            en: "Tavern Dice"
        },
        projectDICEDesc: {
            de: "Tavern Dice ist mein aktuellstes Projekt, an welchem ich alleine arbeite und welches sich zum jetzigen Zeitpunkt noch in der Konzept phase befindet. Es handelt sich um ein kleines gelegenheits Würfelspiel, welches 10.000 nachempfunden ist. Bis ende 2026 soll das Spiel auf Itch.io kostenlos spielbar sein und einen 2 Spieler Multiplayer so wie Singleplayer gegen Bots beinhalten.",
            en: "Tavern Dice is my latest project, which I am working on alone and which is currently still in the concept phase. It is a small casual dice game modeled after 10,000. By the end of 2026, the game should be playable for free on Itch.io and include a 2-player multiplayer mode as well as single-player mode against bots."
        },
        contactTitle: {
            de: "Kontakt",
            en: "Contact"
        },
        contactText: {
            de: "Ich bin offen für neue Jobangebote und spannende Projekte. Kontaktieren Sie mich gerne!",
            en: "I am open to new job opportunities and exciting projects. Feel free to contact me!"
        },
        contactEmail: {
            de: "E-Mail Senden",
            en: "Send Email"
        },
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[key] && translations[key][lang]) {
                element.innerHTML = translations[key][lang];
            }
        });

        langButtons.de.classList.toggle('active', lang === 'de');
        langButtons.en.classList.toggle('active', lang === 'en');

        localStorage.setItem('language', lang);
    };

    langSwitcher.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const lang = event.target.id.split('-')[1];
            setLanguage(lang);
        }
    });

    const savedLang = localStorage.getItem('language') |

 'de';
    setLanguage(savedLang);
});
