import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import {Observable, of, throwError} from 'rxjs';



const BASIC_URL =  ["http://localhost:8080/api/admin/"]
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addStudent(studentDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+"student",studentDto,{
      headers: this.createAuthorizationHeader(),
    });

  }

  getAllStudents():Observable<any>{
    return this.http.get<[]>(BASIC_URL+"students",{
      headers:this.createAuthorizationHeader()
    })
  }

  deleteStudent(id:any):Observable<any>{
    return this.http.delete<[]>(BASIC_URL+`student/${id}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  getStudentById(studentId:any):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`student/${studentId}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  updateStudent(studentId:number,studentDto:any):Observable<any>{
    return this.http.put<[]>(BASIC_URL+`student/${studentId}`,studentDto,{
      headers:this.createAuthorizationHeader(),
    });
  }

  getAllAppliedPermits():Observable<any>{
    return this.http.get<[]>(BASIC_URL+`permits`,{
      headers:this.createAuthorizationHeader()
    })
  }

  changePermitStatus(permitId:number,status:string):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`permit/${permitId}/${status}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  addTeacher(teacherDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+"teacher",teacherDto,{
      headers: this.createAuthorizationHeader(),
    });
  }

  deleteTeacher(teacherId:any):Observable<any>{
    return this.http.delete<[]>(BASIC_URL+`teacher/${teacherId}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  getAllTeachers():Observable<any>{
    return this.http.get<[]>(BASIC_URL+"teachers",{
      headers:this.createAuthorizationHeader()
    })
  }

  getTeacherById(teacherId:any):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`teacher/${teacherId}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  updateTeacher(teacherId:number,teacherDto:any):Observable<any>{
    return this.http.put<[]>(BASIC_URL+`teacher/${teacherId}`,teacherDto,{
      headers:this.createAuthorizationHeader(),
    });
  }


  createAuthorizationHeader():HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Authorization","Bearer "+ StorageService.getToken()
    );
  }

  payFee(studentId:number,feeDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+`fee/${studentId}`,feeDto,{
      headers: this.createAuthorizationHeader(),
    });

  }


  // Méthodes pour les séances

  getAllSeances(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + 'seances',{
      headers:this.createAuthorizationHeader()
    });
  }


  getSeanceById(seanceId:any):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`seance/${seanceId}`,{
      headers:this.createAuthorizationHeader()
    })
  }
  addSeance(seanceDto: any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + 'seance',seanceDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
  updateSeance(seanceId: number, seanceDto: any): Observable<any>{
    return this.http.put<[]>(BASIC_URL + `seance/${seanceId}`,seanceDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
  deleteSeance(seanceId: any): Observable<any>{
    return this.http.delete<[]>(BASIC_URL + `seance/${seanceId}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  public setStatus(seanceId:number) : Observable<boolean>{
    let Seance: any;
    Seance = this["Seance"].find((seanceDto: { seanceId: number; }) => seanceDto.seanceId == seanceId);
    if (Seance != undefined){
      Seance.status=!Seance.status;
      return of(true);
    }else return throwError(()=>new Error("Seance not found "))
  }


  // Méthodes pour les formations

  getAllFormations(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + 'formations', {
      headers:this.createAuthorizationHeader(),
    });
  }

  getFormationById(formationId:any):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`formation/${formationId}`,{
      headers:this.createAuthorizationHeader()
    })
  }
  addFormation(formationDto: any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + 'formation',formationDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
  updateFormation(formationId: number, formationDto: any): Observable<any>{
    return this.http.put<[]>(BASIC_URL + `formation/${formationId}`,formationDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
  deleteFormation(formationId: any): Observable<any>{
    return this.http.delete<[]>(BASIC_URL + `formation/${formationId}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  // Méthodes pour les certificats
  getAllCertificats(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + 'certificats', {
      headers:this.createAuthorizationHeader(),
    });
  }

  addCertificat(certificatDto: any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + 'certificat',certificatDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
  getCertificatById(certificatId: number): Observable<any>{
    return this.http.get(BASIC_URL + `certificat/${certificatId}`, {
      headers:this.createAuthorizationHeader(),
    })
  }
  updateCertificat(certificatId: number, certificatDto: any): Observable<any>{
    return this.http.put<[]>(BASIC_URL + `certificat/${certificatId}`,certificatDto,{
      headers:this.createAuthorizationHeader(),
    });
  }

  deleteCertificat(certificatId: any): Observable<any>{
    return this.http.delete<[]>(BASIC_URL + `certificat/${certificatId}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

/* ====== chat ==========*/


  // Ajouter une séance à une formation

  addSeanceToF(formationId: number, seanceDto: any ): Observable<any> {
    return this.http.post<[]>(BASIC_URL + `formation/${formationId}/seance`, seanceDto, {
      headers: this.createAuthorizationHeader(),
    });
  }


  // Assigner une formation à un enseignant
  addFormationToTeacher( teacherId: number, formationDto: any  ): Observable<[]> {
    return this.http.post<[]>(BASIC_URL + `teacher/${teacherId}/formation`, formationDto,{
      headers: this.createAuthorizationHeader(),
    });
  }


  addCertifToUser( studentId: number, certificatDto: any  ): Observable<[]> {
    return this.http.post<[]>(BASIC_URL + `student/${studentId}/certificat`, certificatDto,{
      headers: this.createAuthorizationHeader(),
    });
  }




  addFormationToStudent( studentId: number, formationDto: any  ): Observable<[]> {
    return this.http.post<[]>(BASIC_URL + `student/${studentId}/formation`, formationDto,{
      headers: this.createAuthorizationHeader(),
    });
  }




}
