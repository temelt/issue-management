
import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class IssueService{

  private ISSUE_PATH = "/issue";
  private ISSUE_GET_BY_ID_DETAILS = this.ISSUE_PATH + "/detail/"
  private ISSUE_GET_STATUSES = this.ISSUE_PATH + "/statuses"

  constructor(private apiService: ApiService ){
  }

  getAll(page) : Observable<any>{
    return this.apiService.get(this.ISSUE_PATH+'/pagination',page).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  getById(id) : Observable<any>{
    return this.apiService.get(this.ISSUE_PATH,id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  createIssue(project) : Observable<any>{
    return this.apiService.post(this.ISSUE_PATH,project).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  delete(id) : Observable<any>{
    return this.apiService.delete(this.ISSUE_PATH,id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  getAllIssueStatuses() {
    return this.apiService.get(this.ISSUE_GET_STATUSES).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  getByIdWithDetails(id: number) {
    return this.apiService.get(this.ISSUE_GET_BY_ID_DETAILS + id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }
}
