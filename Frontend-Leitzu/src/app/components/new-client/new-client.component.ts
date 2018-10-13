import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../interfaces/clients';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  public clientInfo = {
    name: null,
    gender: null,
    phone: null,
    amount: null
  };

  public error = {
    name: null,
    gender: null,
    phone: null,
    amount: null
  };

  public temp_err = null;

  constructor(
    private client: ClientService,
    private router: Router,
    private _location: Location
    ) { }

  ngOnInit() {
  }

  back(){
    //this.router.navigateByUrl('/clients');
    this._location.back();
  }

  onSubmit(){
    this.client.newClient(this.clientInfo).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.router.navigateByUrl('/clients');
  }

  handleError(error){
    this.temp_err = 1;
    this.error = error.error.errors;
  }

}
