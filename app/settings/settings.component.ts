import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Progress } from "ui/progress";
import { Router } from "@angular/router";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    public progressValue: number;
    public people: Array<any>;


    constructor(private router: Router) {
        this.people = [];

    }

    ngOnInit() {
        this.people.push({
            "firstName": "Gassan",
            "lastName": "Jabbar"
        })
        this.people.push({
            "firstName": "Dana",
            "lastName": "Menati"
        })
        this.people.push({
            "firstName": "Aboudi",
            "lastName": "Menati"
        })
        console.log(this.people);

        this.progressValue = 0;

        setInterval(() => {
            this.progressValue += 1;
        }, 100);
    }

    onValueChanged(args) {
        let progressBar = <Progress>args.object;

        console.log("Value changed for " + progressBar);
        console.log("New value: " + progressBar.value);
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    goToDetails(){
        this.router.navigate(["home"]);

    }

}
