import {ChartType} from "./ChartType";

export interface DataSets {
    label?: string;
    data: number[] | string[];
    backgroundColor?: string[];
    boderColor?: string[];
    borderWidth?: number;
    type?: ChartType;
}
