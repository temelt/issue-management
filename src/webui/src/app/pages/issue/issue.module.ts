import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';
import {IssueRoutingModule} from "./issue.routing.module";

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule
  ],
  declarations: [IssueComponent]
})
export class IssueModule { }
