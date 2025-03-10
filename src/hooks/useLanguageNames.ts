import {useTranslation} from "react-i18next";

export const useLanguageNames = () => {
    const {t} = useTranslation();

    return [
        {value: undefined, label: t("autoDetect")},
        {value: "EN", label: t("EN")},
        {value: "BG", label: t("BG")},
        {value: "ZH", label: t("ZH")},
        {value: "CS", label: t("CS")},
        {value: "DA", label: t("DA")},
        {value: "ET", label: t("ET")},
        {value: "FI", label: t("FI")},
        {value: "FR", label: t("FR")},
        {value: "EL", label: t("EL")},
        {value: "ES", label: t("ES")},
        {value: "ID", label: t("ID")},
        {value: "JA", label: t("JA")},
        {value: "KO", label: t("KO")},
        {value: "LT", label: t("LT")},
        {value: "LV", label: t("LV")},
        {value: "NL", label: t("NL")},
        {value: "DE", label: t("DE")},
        {value: "PL", label: t("PL")},
        {value: "PT", label: t("PT")},
        {value: "RU", label: t("RU")},
        {value: "RO", label: t("RO")},
        {value: "SK", label: t("SK")},
        {value: "SL", label: t("SL")},
        {value: "SV", label: t("SV")},
        {value: "TR", label: t("TR")},
        {value: "UK", label: t("UK")},
        {value: "HU", label: t("HU")},
        {value: "IT", label: t("IT")}
    ];
}
