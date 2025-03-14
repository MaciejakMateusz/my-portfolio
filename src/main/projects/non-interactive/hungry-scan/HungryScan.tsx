import SwaggerUI from "swagger-ui-react";
import {Helmet} from "react-helmet";

export const HungryScan = () => {
    return (
        <div>
            <Helmet>
                <title>HungryScan API</title>
            </Helmet>
            <SwaggerUI url="/open-api/json/hungry-scan-api.json" />
        </div>
    );
};