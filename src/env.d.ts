/// <reference types="astro/client" />

declare namespace App {
	interface Locals {
		lang: import("./i18n/ui").Lang;
		t: ReturnType<typeof import("./i18n/ui").useTranslations>;
	}
}
