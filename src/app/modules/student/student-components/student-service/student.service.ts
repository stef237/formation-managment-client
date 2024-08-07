import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import { Observable } from 'rxjs';


const BASIC_URL=["http://localhost:8080/api/student/"]


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentById():Observable<any>{
    return this.http.get<[]>(BASIC_URL+`${StorageService.getUserId()}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  getAllAppliedPermitsById():Observable<any>{
    return this.http.get<[]>(BASIC_URL+`permit/${StorageService.getUserId()}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  applyPermit(studentPermitDto: { userId: any; }): Observable<any> {
    studentPermitDto.userId = StorageService.getUserId();
    return this.http.post<[]>(BASIC_URL + 'permit', studentPermitDto, {
      headers: this.createAuthorizationHeader()
    });
  }



  updateStudent(studentDto: any):Observable<any>{
    return this.http.put<[]>(BASIC_URL+`${StorageService.getUserId()}`,studentDto,{
      headers:this.createAuthorizationHeader(),
    });
  }


  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.append(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }
/* ===================== =============================*/



  studentSelectFormation( studentId: number, formationDto: any  ): Observable<[]> {
    return this.http.post<[]>(BASIC_URL + `student/${studentId}/formation`, formationDto,{
      headers: this.createAuthorizationHeader(),
    });
  }

  // Nouvelle méthode pour ajouter une formation à la liste personnelle
  addFormationToStudent(formationId: number): Observable<any> {
    return this.http.post<[]>(BASIC_URL + 'addFormation', { formationId }, {
      headers: this.createAuthorizationHeader()
    });
  }


}
