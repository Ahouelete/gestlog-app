
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class SoumissionnaireService {
    
    constructor(private http: HttpClient, private router: Router) { }

    url = environment.backend + '/soumissionnaire'

    all(): Observable<Object> {
        return this.http.get(`${this.url}/all`)
    }

    create(soumissionnaire: Object) {
        return this.http.post(`${this.url}/add`, soumissionnaire)
    }

    update(soumissionnaire: Object) {
        return this.http.put(`${this.url}/update`, soumissionnaire)
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/delete/${id}`)
    }
}
