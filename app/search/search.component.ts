import { Component, OnInit, ChangeDetectionStrategy  } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

class Country {
    constructor(public name: string) { }
}

let europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];


@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    public countries: Array<Country>;
    constructor() {
        this.countries = [];

        for (let i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
