import { Component, OnInit } from '@angular/core';
import { DaoService } from 'src/app/services/daoService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  nbDaoGagner = 0
  nbDaoPerdu = 0
  nbDaoConstitution = 0
  nbDaoAttente = 0
  constructor(private _daoService: DaoService) { }

  ngOnInit(): void {
    this.getStatisticDao()
  }
  getStatisticDao() {
    this.nbDaoGagner = 0
    this.nbDaoPerdu = 0
    this.nbDaoConstitution = 0
    this.nbDaoAttente = 0
    this._daoService.all().subscribe({
      next: (data: any) => {
        if (data.description == 'success') {
          const response = data.data
          response.forEach((element: any) => {
            if (element.statutDao.statut == 'GAGNER') this.nbDaoGagner++
            if (element.statutDao.statut == 'EN COURS DE CONSTITUTION' || element.statutDao.statut == 'EN COURS D\'ETUDE') this.nbDaoConstitution++
            if (element.statutDao.statut == 'DEPOSER') this.nbDaoAttente++
            if (element.statutDao.statut == 'ABANDON' || element.statutDao.statut == 'REJETER') this.nbDaoPerdu++
          });
        }
      },
      error: (error) => {
      },
      complete: () => {
        console.log('execution complete');
      }
    })
  }
}
