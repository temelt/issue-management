import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  collapseClass:string = 'collapsed';
  isCollapsed = false;

  activeUser = {};

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
  }

  ngOnInit() {

    this.activeUser = JSON.parse(localStorage.getItem('currentUser'));
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
