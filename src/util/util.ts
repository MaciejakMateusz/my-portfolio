import i18n from "i18next";

export const getCookie = (cookieName: string) => {
    let cookie: any = {};
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
};

export const getLanguage = () => {
    const lngCookie = getCookie('lng');
    return lngCookie ? lngCookie : i18n.language;
}