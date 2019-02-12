import { Component, OnInit } from '@angular/core';
import {IssueService} from "../../services/shared/issue.service";
import {Page} from "../../common/page";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  page = new Page();
  rows=[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.setPage({offset: 0});
  }

  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
    this.issueService.getAll(this.page).subscribe(pagedData => {
      this.page.size = pagedData.size;
      this.page.page = pagedData.page;
      this.page.totalElements = pagedData.totalElements;
      this.rows = pagedData.content;
    });
  }
}
