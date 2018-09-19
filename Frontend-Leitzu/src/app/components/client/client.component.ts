import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/clients';
import { Records } from '../../interfaces/records';
import { Expenses } from '../../interfaces/expenses';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public id = -1;

  public clientInfo: Client[] = [];

  public records: Records[] = [];

  public expenses: Expenses[] = [];

  public error = [];

  constructor
  ( private client: ClientService,
    private router: Router,
    private route: ActivatedRoute, 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.id = params['id']; });

    this.client.getClient(this.id).subscribe(clientInfo => {

      this.clientInfo = clientInfo.data; // store client info

      this.client.getRecords(clientInfo.data.href.records).subscribe(records => {
          this.records = records.data;
      });

      this.client.getExpenses(clientInfo.data.href.expenses).subscribe(expenses => {
        this.expenses = expenses.data;
      });

    }); // end getClient
  }

  back(){
    history.go(-1);
  }

  onSubmit(){

    this.client.updateClient(this.clientInfo).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    
  }

  handleResponse(data){
    console.log("updated");
  }

  handleError(error){
    this.error = error.error.error;
  }

}
