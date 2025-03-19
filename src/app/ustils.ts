const SUPPORTED_THEMES = ["light"] as const;
type Theme = (typeof SUPPORTED_THEMES)[number];

type InferValueFromKey<T extends Theme> = {
    [key in T]: key;
};
type ThemeRecord = InferValueFromKey<Theme>;

export const APP_BODY_ID = `app-body`;

export const theme = {
    values(): ThemeRecord {
        return SUPPORTED_THEMES.reduce(
            (acc, v) => ({ ...acc, [v]: v }),
            {} as ThemeRecord
        );
    },
    getThemeObject(): ThemeRecord {
        const rValue = {} as ThemeRecord;

        SUPPORTED_THEMES.forEach((v) => {
            (rValue as any)[v] = v;
        });

        return rValue;
    },
    get(): Theme | null {
        const theme = localStorage.getItem("app-theme") as string | null;
        if (!theme) return null;

        const themes = this.values();
        const rValue = themes[theme as Theme];
        return rValue;
    },
    apply(theme: Theme) {
        console.log("@apply theme =>", theme);

        const doc = document.getElementById(APP_BODY_ID);
        if (!doc) {
            console.error(
                `@Element get '${APP_BODY_ID}' returned falsy value! \n Theme Service is now Exiting!`
            );
            return;
        }

        doc.classList.add(theme);

        localStorage.setItem("app-theme", theme);
    },
    initiate() {
        const theme = this.get();
        console.log("@theme.init() => ", theme);

        if (theme) this.apply(theme);
    },
    isDark() {
        return false; // Since only light theme is supported
    },
};
