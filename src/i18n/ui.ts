// src/i18n/ui.ts
export const languages = {
    en: 'English',
    fi: 'Suomi',
};

export const ui = {
    en: {
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'project.back': '← Back to projects',
    },
    fi: {
        'nav.projects': 'Projektit',
        'nav.about': 'Tietoa minusta',
        'project.back': '← Takaisin projekteihin',
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)['en']) {
        return ui[lang][key] || ui['en'][key];
    };
}
