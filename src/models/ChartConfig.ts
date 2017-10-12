import {ChartType} from "./ChartType";
import {ChartData} from "./ChartData";
import {ChartOptions} from "./ChartOptions";

export interface ChartConfig {
    type: ChartType;
    data: ChartData;
    options?: ChartOptions;
}