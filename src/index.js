import {Router} from "@core/routes/Router";
import {DashboardPage} from "@core/pages/DashboardPage";
import {ExcelPage} from "@core/pages/ExcelPage";
import './scss/index.scss'

new Router('#app', {
    dashboard: DashboardPage,
    excel: ExcelPage
})
