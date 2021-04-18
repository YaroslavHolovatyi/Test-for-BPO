import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent} from "igniteui-angular";
import { ECLASS1, ECLASS2, ECLASS3, ECLASS4, ECLASS5, ECLASS6, ECLASS7, ECLASS8 } from "./data";

@Component({
    selector: "grid-search",
    styleUrls: ["./grid-search.component.scss"],
    templateUrl: "./grid-search.component.html"
})
export class GridSearchComponent implements OnInit {

    @ViewChild("grid1", { static: true }) public grid: IgxGridComponent;
    public data: any[];
    public data1: any[];
    public data2: any[];
    public data3: any[];
    public data4: any[];
    public data5: any[];
    public data6: any[];
    public data7: any[];
    public searchText: string = "";
    public caseSensitive: boolean = false;
    public exactMatch: boolean = false;

    public ngOnInit(): void {
        this.data = ECLASS1;
        this.data1 = ECLASS2;
        this.data2 = ECLASS3;
        this.data3 = ECLASS4;
        this.data4 = ECLASS5;
        this.data5 = ECLASS6;
        this.data6 = ECLASS7;
        this.data7 = ECLASS8;
    }

    public clearSearch() {
        this.searchText = "";
        this.grid.clearSearch();
    }

    public searchKeyDown(ev) {
        if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
            ev.preventDefault();
            this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
            ev.preventDefault();
            this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public updateExactSearch() {
        this.exactMatch = !this.exactMatch;
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
