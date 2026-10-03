// src/i18n/ui.ts
export const languages = {
    en: "English",
    fi: "Suomi",
};

export const ui = {
    en: {
        "header.pageTitle": "Janne's portfolio",
        "nav.projects": "Projects",
        "nav.about": "About",
        "project.back": "← Back to projects",
        "projects.desc": "Selected software projects by Janne",
        "about.title": "About",
        "about.desc": "About Janne, a software developer",
        "about.heading": "About me",
        "about.body": "Who really is Janne?",
        "home.title": "Home",
        "home.desc": "Software developer portfolio and technical projects",
        "hero.title": "Hi, I'm Janne.",
        "hero.subtitle":
            "Full-stack software developer specializing in high-performance backends, Rust, Python, and modern React environments.",
        "skills.heading": "Technical Stack",
        "skills.filterAll": "All Skills",
        "skills.filterCore": "Core Focus",
        "skills.filterProficient": "Proficient",
        "skills.filterFamiliar": "Familiar & Foundations",
    },
    fi: {
        "header.pageTitle": "Jannen portfolio",
        "nav.projects": "Projektit",
        "nav.about": "Tietoa minusta",
        "project.back": "← Takaisin projekteihin",
        "projects.desc": "Valikoituja ohjelmistoprojekteja",
        "about.title": "Tietoa minusta",
        "about.desc": "Tietoa Jannesta, ohjelmistokehittäjästä",
        "about.heading": "Tietoa minusta",
        "about.body": "Kuka Janne oikeastaan on?",
        "home.title": "Etusivu",
        "home.desc": "Ohjelmistokehittäjän portfolio",
        "hero.title": "Hei, olen Janne.",
        "hero.subtitle":
            "Täyden pinon ohjelmistokehittäjä. Erikoistunut suorituskykyisiin verkkopalveluihin, Rustiin, Pythoniin ja moderniin React-ekosysteemiin.",
        "skills.heading": "Tekninen osaaminen",
        "skills.filterAll": "Kaikki taidot",
        "skills.filterCore": "Ydinosaaminen",
        "skills.filterProficient": "Vahva osaaminen",
        "skills.filterFamiliar": "Tuttuja & Perusteet",
    },
} as const;

export type Lang = keyof typeof ui;

// Finnish is the default locale and lives at the unprefixed root (lang is undefined)
export const langStaticPaths = () => [
    { params: { lang: undefined } },
    { params: { lang: "en" } },
];

export function useTranslations(lang: Lang) {
    return function t(key: keyof (typeof ui)["en"]) {
        return ui[lang][key] || ui["en"][key];
    };
}
