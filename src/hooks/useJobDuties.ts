import {useTranslation} from "react-i18next";

export const useJobDuties = () => {
    const {t} = useTranslation();
    const duties: Map<string, string[]> = new Map();

    duties.set('dataEngineer', [
        t('dataEngineer.features'),
        t('dataEngineer.maintenance'),
        t('dataEngineer.upgrade'),
        t('dataEngineer.runningJobs'),
        t('dataEngineer.testing'),
        t('dataEngineer.scrum'),
        t('dataEngineer.stories')
    ]);

    duties.set('javaDev', [
        t('javaDev.scrumHybrid'),
        t('javaDev.pmsTeam'),
        t('javaDev.retrospectives'),
        t('javaDev.selfTaskPicking'),
        t('javaDev.featureImprovements'),
        t('javaDev.bugFixing'),
        t('javaDev.automatedTests'),
        t('javaDev.seleniumTests'),
        t('javaDev.jasperReports'),
        t('javaDev.internalLearning')
    ]);

    duties.set('javaIntern', [
        t('javaIntern.onboarding'),
        t('javaIntern.scrumHybrid'),
        t('javaIntern.training'),
        t('javaIntern.toolLearning')
    ]);

    duties.set('careerBreak', [
        t('careerBreak.relocation'),
        t('careerBreak.thailandTrip'),
        t('careerBreak.learningTech')
    ]);

    duties.set('cncProgrammer', [
        t('cnc.operation'),
        t('cnc.programming'),
        t('cnc.printOrders'),
        t('cnc.machineSetup'),
        t('cnc.technicalDrawings'),
        t('cnc.toolSelection'),
        t('cnc.optimization'),
        t('cnc.toleranceCheck'),
        t('cnc.orderRegistration')
    ]);

    return duties;
}