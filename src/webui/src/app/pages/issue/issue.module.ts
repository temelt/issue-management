import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';
import {IssueRoutingModule} from "./issue.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [IssueComponent, IssueDetailComponent]
})
export class IssueModule { }
