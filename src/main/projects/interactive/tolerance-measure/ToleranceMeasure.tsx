import {Analysis} from "./Analysis.tsx";
import {ToleranceMeasureForm} from "./ToleranceMeasureForm.tsx";

export const ToleranceMeasure = () => {
    return (
        <section className={'tolerance-measure'}>
            <ToleranceMeasureForm/>
            <Analysis/>
        </section>
    );
}