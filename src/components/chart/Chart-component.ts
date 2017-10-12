
import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {Chart} from "chart.js/dist/Chart.bundle.js";
import {ChartConfig} from "../../models/ChartConfig";
import {ChartType} from "../../models/ChartType";
@Component({
    selector : "chart",
    templateUrl : "Chart-component.html",
    styleUrls : ["Chart-component.scss"],
})
export class ChartComponent implements OnInit {
    @Input() height: string;
    @Input() width: string;
    @ViewChild('canvas') canvas: HTMLCanvasElement;
    constructor() {}
    ngOnInit(): void {
        let ctx = this.canvas.getContext("2d");
        let config: ChartConfig = {
            type: ChartType.LINE,
            data: {
                datasets: [
                    {data: [5, 8, 25, 10, 152, 200]}
                ],
                labels: ["rojo", "azul", "verde", "lila", "amarillo", "rosa"]
            }
        };
        new Chart(ctx, config);
    }
}
// TODO No compila con typescript 2.4 cambiar el enumerado.
