import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/clients';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {

  public id = -1;

  public clientInfo: Client[] = [];

  public rechargeAmount = null;

  public success = null;

  public error = {
    name: null,
    gender: null,
    phone: null,
    next_contact_date: null
  };

  public temp_err = null;

  constructor
  ( private client: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.id = params['id']; });

    this.client.getClient(this.id).subscribe(clientInfo => {
      this.clientInfo = clientInfo.data; // store client info
    }); // end getClient
  }

  back(){
    this.router.navigateByUrl('/clients');
  }

  resetSuccess(){
    this.success = null;
  }

  onSubmit(){
    if(this.success){
      this.success = null;
    }

    this.temp_err = null;
    this.error = {
      name: null,
      gender: null,
      phone: null,
      next_contact_date: null
    };

    this.client.renew(this.clientInfo, this.rechargeAmount).subscribe(
      data => this.handleResponse(),
      error => this.handleError(error)
    );
    
  }

  handleResponse(){
    this.success = 1;
  }

  handleError(error){
    this.temp_err = 1;
    this.error = error.error.errors;
  }

}
