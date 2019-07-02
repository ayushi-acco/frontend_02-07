import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {IYear} from './IYear';
import {IReport} from './IReport';
import { Batch } from './batch';
import { Tests } from './Tests';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private url: string= "/assets/test.json";
  private urlyear: string="";
  private url_yearname: string="";
  private urlbname: string="";
 


 
  constructor(private http: HttpClient) { }
 

  public getyear():Observable<IYear[]>{

  return this.http.get<IYear []>(this.urlyear);

   }
   public getbatches(name:string):Observable<Batch[]>{
    return this.http.get<Batch []>(this.url_yearname);
     }
     public gettests(bname:string):Observable<Tests[]>{
      return this.http.get<Tests []>(this.urlbname);
       }
  public getList(somelist:string):Observable<IReport[]>{
    return this.http.get<IReport []>(somelist);
  }

  // public getScoreList(){
  //     return this.http.get(this.url2);
  // }
//   let params = new HttpParams()
//   .set('selectedyear', "1999")
//   .set('selectedbatch', "Batch")
//   .set('selectedtest', "Test");

// // JSON.stringify(sas);
// let url = 'avjvchvcdvc/acghdyc/'

// return this.http.post<IReport[]>(url, params.toString(), httpOptions);

  }
