import i18n, {TFunction} from "i18next";

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

export const getMonth = (month: number, t: TFunction) => {
    switch (month) {
        case 1:
            return t('january')
        case 2:
            return t('february')
        case 3:
            return t('march')
        case 4:
            return t('april')
        case 5:
            return t('may')
        case 6:
            return t('june')
        case 7:
            return t('july')
        case 8:
            return t('august')
        case 9:
            return t('september')
        case 10:
            return t('october')
        case 11:
            return t('november')
        case 12:
            return t('december')
        default:
            return "Month"
    }
}