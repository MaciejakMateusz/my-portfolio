import {createRoot} from 'react-dom/client'
import './index.css'
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n.ts";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {Router} from "./routing/Router.tsx";


createRoot(document.getElementById('root')!).render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <Router/>
        </Provider>
    </I18nextProvider>
)
