import { defineMiddleware } from "astro:middleware";
import { useTranslations, type Lang } from "./i18n/ui";

export const onRequest = defineMiddleware((context, next) => {
	const lang = (context.currentLocale ?? "fi") as Lang;
	context.locals.lang = lang;
	context.locals.t = useTranslations(lang);
	return next();
});
