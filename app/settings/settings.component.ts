import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Progress } from "ui/progress";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    public progressValue: number;

    constructor() {
        // Use the component constructor to inject providers.
    }

     ngOnInit() {
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
}
