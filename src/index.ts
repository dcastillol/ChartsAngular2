import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from "./components/chart/Chart-component";


export {ChartConfig} from "./models/ChartConfig";
export {ChartData} from "./models/ChartData";
export {ChartOptions} from "./models/ChartOptions";
export {ChartType} from "./models/ChartType";
export {DataSets} from "./models/DataSets";



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartsModule {
}
