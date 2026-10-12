export type Theme = 'light' | 'dark';

export const getStoredTheme = (): Theme => {
    if (typeof window === 'undefined') {
        return 'light';
    }

    return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
};

export const applyTheme = (theme: Theme) => {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.classList.toggle('dark', theme === 'dark');
};

applyTheme(getStoredTheme());
