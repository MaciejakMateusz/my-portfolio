import SwaggerUI from "swagger-ui-react";

export const HungryScan = () => {
    return (
        <div>
            <SwaggerUI url="/open-api/json/hungry-scan-api.json" />
        </div>
    );
};