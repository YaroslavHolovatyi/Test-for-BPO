import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent} from "igniteui-angular";
import { ECLASS } from "./data";

@Component({
    selector: "grid-search",
    styleUrls: ["./grid-search.component.scss"],
    templateUrl: "./grid-search.component.html"
})
export class GridSearchComponent implements OnInit {

    @ViewChild("grid1", { static: true }) public grid: IgxGridComponent;
    public data: any[];
    public searchText: string = "";
    public caseSensitive: boolean = false;
    public exactMatch: boolean = false;

    public ngOnInit(): void {
        this.data = ECLASS;
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
