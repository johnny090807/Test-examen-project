import {Component} from "@angular/core";

@Component({
    selector: 'app-users',
    template: `
        <div class="row" id="left">
            <app-user-input></app-user-input>
            <hr>
            <div class="identifiers" style="">
                <app-identifiers></app-identifiers>
            </div>
        </div>
        <div class="row" id="right">
            <app-user-list></app-user-list>
        </div>
    `,
    styles: [`        
	   #left {left: 0; top: 0; width: 50%; }
	   #right { position: absolute; margin-right: 20px;right: 0; top: 130px; width: 50%;}
        @media screen and (min-width: 992px){
            #right{
                margin-right: 10%;
            }
        }
    
    `]
})

export class UsersComponent{}