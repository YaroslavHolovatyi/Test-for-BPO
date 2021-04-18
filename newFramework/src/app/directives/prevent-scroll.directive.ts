import { AfterViewInit, Directive, Host, Input, NgModule, Optional } from "@angular/core";
import { IgxGridBaseDirective } from "igniteui-angular";

@Directive({
    selector: "[igxPreventDocumentScroll]"
})
export class IgxPreventDocumentScrollDirective implements AfterViewInit {
    private _preventScroll = true;
    private gridBody: HTMLElement;

    @Input("igxPreventDocumentScroll")
    public set preventScroll(val: boolean) {
        if (val === false) { this._preventScroll = false; }
    }
    
    constructor(@Host() @Optional() private grid: IgxGridBaseDirective) {
    }

    public ngAfterViewInit() {
        this.gridBody = this.getGridTBody();
        if (this._preventScroll) {
            this.gridBody.addEventListener("wheel", this.preventDocumentScroll, { passive: false });
        }
    }

    public ngOnDestroy() {
        this.gridBody.removeEventListener("wheel", this.preventDocumentScroll);
    }

    private preventDocumentScroll(event) {
        event.preventDefault();
    }

    private getGridTBody(): HTMLElement {
        return this.grid.tbody.nativeElement;
    }
}

    @NgModule({
    declarations: [IgxPreventDocumentScrollDirective],
    exports: [IgxPreventDocumentScrollDirective]
})

export class IgxPreventDocumentScrollModule { }
