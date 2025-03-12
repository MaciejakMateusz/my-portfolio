import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css";

export const PortfolioApi = () => {
    return (
        <div>
            <SwaggerUI url="/json/portfolio-api.json" />
        </div>
    );
};