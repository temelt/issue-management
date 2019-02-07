import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IssueComponent} from "./issue.component";

const routes: Routes = [
  {
    path: '',
    component: IssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueRoutingModule { }
