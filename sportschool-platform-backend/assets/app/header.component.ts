import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/users']">Gebruikers</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Log in</a></li>
                </ul>
                <!--<ul class="nav nav-pills pull-right">-->
                    <!--<li routerLinkActive="active"><a [routerLink]="['/subscription']">Gebruikers</a></li>-->
                <!--</ul>-->
            </nav>
        </header>
    `
})
export class HeaderComponent {

}