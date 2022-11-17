const colorThemes = document.querySelectorAll('[name="theme"]');
const isFirefox = window.navigator.userAgent.indexOf("Firefox") > -1;
const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./);


const storeTheme = function (theme) {
    localStorage.setItem("theme", theme);
}

const getTheme = function () {
    const activeTheme = localStorage.getItem("theme");

    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    document.documentElement.className = activeTheme;
};

const backup = function (theme) {
    document.documentElement.className = theme;
};

colorThemes.forEach(theme => {
    theme.addEventListener('click', () => {
        if (isFirefox || isIE) {
            backup(theme.id);
        }
        storeTheme(theme.id);
    });
});

document.onload = getTheme();