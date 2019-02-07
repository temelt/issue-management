import {Component} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    collapseClass:string = 'collapsed';

    constructor(public router: Router) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        this.showMenu='dashboard';
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('aside');
        return (dom)?dom.classList.contains(this.collapseClass):false;
    }

    toggleSidebar() {
        const dom: any = document.querySelector('aside');
        (dom)?dom.classList.toggle(this.collapseClass):'';
        const cdom: any = document.querySelector('#main-container');
        (cdom)?cdom.classList.toggle(this.collapseClass):'';
    }

}
