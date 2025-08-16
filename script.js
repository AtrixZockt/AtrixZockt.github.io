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
            de: "Über Mich",
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
            de: "Über Mich",
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
        resumeButton: {
            de: "Lebenslauf herunterladen",
            en: "Download Resume"
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
        project1Title: {
            de: "Itch.io: Island of Bats",
            en: "Itch.io: Island of Bats"
        },
        project1Desc: {
            de: "Eine kurze Beschreibung des Spiels. Was war das Ziel? Was war Ihre Rolle? Welche Herausforderungen gab es?",
            en: "A brief description of the game. What was the goal? What was your role? What challenges did you face?"
        },
        projectLinkPlay: {
            de: "Spielen",
            en: "Play Game"
        },
        project2Title: {
            de: "KAT - Advanced Medical",
            en: "KAT - Advanced Medical"
        },
        project2Desc: {
            de: "Eine kurze Beschreibung des Tools. Welches Problem löst es? Welche Technologien wurden verwendet?",
            en: "A brief description of the tool. What problem does it solve? What technologies were used?"
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
        footerText: {
            de: `&copy; ${new Date().getFullYear()} Julian Brückner. Alle Rechte vorbehalten.`,
            en: `&copy; ${new Date().getFullYear()}. All rights reserved.`
        }
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
