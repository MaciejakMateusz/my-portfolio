import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css";
import {Helmet} from "react-helmet";

export const PortfolioApi = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio API</title>
            </Helmet>
            <SwaggerUI url="/open-api/json/portfolio-api.json" />
        </div>
    );
};