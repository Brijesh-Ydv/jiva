import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ro-list-view-pfa',
  templateUrl: './ro-list-view-pfa.component.html',
  styleUrls: ['./ro-list-view-pfa.component.css']
})
export class RoListViewPfaComponent {
  getdata: any;

  constructor(private httpService: AuthService) {
    this.httpService.getUser().subscribe((data: any) => {
      console.log("data", data);
      this.getdata = data.result
    })
  }

  ngOnInit(): void {
  }

}
