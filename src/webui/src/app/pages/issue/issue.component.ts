import {Component, OnInit, TemplateRef} from "@angular/core";
import {IssueService} from "../../services/shared/issue.service";
import {Page} from "../../common/page";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ProjectService} from "../../services/shared/project.service";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  modalRef: BsModalRef;
  page = new Page();
  rows = [];
  projectOptions = [];

  issueForm: FormGroup;

  constructor(private issueService: IssueService,
              private projectService: ProjectService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.issueForm = this.formBuilder.group({
      projectId: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });

    this.loadProjects();

    this.setPage({offset: 0});
  }

  private loadProjects() {
    this.projectService.getAll().subscribe(response => {
      this.projectOptions = response;
    });
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

  get f() {
    return this.issueForm.controls
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveIssue() {
    this.issueService.createIssue(this.issueForm.value).subscribe(
      resp => {
        this.issueForm.reset();
        this.setPage({offset: 0});
        this.closeAndResetModal();
      }
    );
  }

  closeAndResetModal(){
    this.modalRef.hide();
  }
}
