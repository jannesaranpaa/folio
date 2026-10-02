// src/i18n/ui.ts
export const languages = {
	en: "English",
	fi: "Suomi",
};

export const ui = {
	en: {
		"nav.projects": "Projects",
		"nav.about": "About",
		"project.back": "← Back to projects",
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
		"nav.projects": "Projektit",
		"nav.about": "Tietoa minusta",
		"project.back": "← Takaisin projekteihin",
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

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)["en"]) {
		return ui[lang][key] || ui["en"][key];
	};
}
