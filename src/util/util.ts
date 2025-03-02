import i18n, {TFunction} from "i18next";
import {setMeasurements, setNegTolerance, setPosTolerance, setProductLength} from "../slices/toleranceMeasureSlice.ts";
import {Chip} from "../interfaces/Chip.ts";
import {AppDispatch} from "../store/store.ts";
import {UseFormSetValue} from "react-hook-form";
import {ToleranceMeasureFields} from "../interfaces/ToleranceMeasureFields.ts";

export const getCookie = (cookieName: string) => {
    let cookie: any = {};
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
};

export const getLanguage = () => {
    return i18n?.language ? i18n.language : getCookie('i18next');
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

export const downloadPdf = (base64Pdf: string, fileName: string = 'measurement_report.pdf') => {
    const blob = base64ToBlob(base64Pdf);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

const base64ToBlob = (base64: string, contentType: string = 'application/pdf'): Blob => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
}

export const generateRandomMeasurements = (dispatch: AppDispatch, setValue: UseFormSetValue<ToleranceMeasureFields>) => {
    const productLength = Math.floor(Math.random() * (500 - 20 + 1)) + 20;
    dispatch(setProductLength(productLength));
    setValue('productLength', productLength);
    const posTolerance = Math.round((Math.random() * 0.9) * 1000) / 1000;
    dispatch(setPosTolerance(posTolerance));
    setValue('posTolerance', posTolerance);
    const negTolerance = Math.round((Math.random() * 0.9 - 0.9) * 1000) / 1000;
    dispatch(setNegTolerance(negTolerance));
    setValue('negTolerance', negTolerance);

    const measurementsNumber = Math.floor(Math.random() * (50 - 6 + 1)) + 6;
    const measurements: Chip[] = []
    for(let i = 0; i <= measurementsNumber; i++) {
        const upperBound = productLength + posTolerance + 0.3;
        const lowerBound = productLength + negTolerance - 0.3;
        const measurement = Math.random() * (upperBound - lowerBound) + lowerBound;
        const chip: Chip = {
            id: Math.random(),
            value: Math.round(measurement * 1000) / 1000,
            label: measurement.toFixed(3)
        };
        measurements.push(chip);
    }
    dispatch(setMeasurements(measurements));
    setValue('measurements', measurements);
}