import SwaggerUI from "swagger-ui-react";

export const HungryScan = () => {
    return (
        <div style={{background: '#FFF'}}>
            <SwaggerUI url="/json/hungry-scan-open-api.json" />
        </div>
    );
};