import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { alert,login, LoginResult } from "ui/dialogs";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    displayAlertDialog() {
        // >> alert-dialog-code
        let options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };

        alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }
    displayLoginDialog() {
        // >> login-dialog-code
        let options = {
            title: "Login",
            message: "Login",
            username: "john_doe",
            password: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };

        login(options).then((loginResult: LoginResult) => {
            console.log(loginResult.result);
        });
        // << login-dialog-code
    }

}
