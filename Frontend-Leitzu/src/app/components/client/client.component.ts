import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/clients';
import { Records } from '../../interfaces/records';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public id = -1;

  public recordId = null;

  public clientInfo: Client[] = [];

  public records: Records[] = [];

  public success = null;

  public recordSuccess = null;

  public recordContent = null;

  public recordForm = {
    id: null,
    client_id: null,
    content: null
  }

  public error = {
    name: null,
    gender: null,
    phone: null,
    next_contact_date: null
  };

  public recordError = {
    content: null
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

      this.client.getRecords(clientInfo.data.href.records).subscribe(records => {
          this.records = records.data;
      });

    }); // end getClient
  }

  /* -------------------------- 公用方法 -------------------------- */

  // getClientRecordExpense(){
  //   this.client.getClient(this.id).subscribe(clientInfo => {

  //     this.clientInfo = clientInfo.data; // store client info

  //     this.client.getRecords(clientInfo.data.href.records).subscribe(records => {
  //         this.records = records.data;
  //     });

  //   }); // end getClient
  // }

  back(){
    this.router.navigateByUrl('/clients');
  }

  /************************** 公用方法 end **************************/


  /* -------------------------- 会员基本信息 -------------------------- */

  resetSuccess(){
    this.success = null;
  }

  onSubmit(){
    this.sumbitReset();

    this.client.updateClient(this.clientInfo).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    
  }

  handleResponse(data){
    this.success = 1;
  }

  handleError(error){
    this.temp_err = 1;
    this.error = error.error.errors;
  }

  sumbitReset(){
    if(this.success){
      this.success = null;
    }

    if(this.recordSuccess){
      this.recordSuccess = null;
    }

    this.temp_err = null;
    this.error = {
      name: null,
      gender: null,
      phone: null,
      next_contact_date: null
    };

    this.recordError = {
      content: null
    };
  }

  /************************** 会员基本信息 end **************************/



  /* -------------------------- 会员记录 -------------------------- */

  createRecord(){
    this.recordForm.client_id = this.id;
    this.recordForm.content = this.recordContent;

    this.sumbitReset();

    this.client.createRecord(this.recordForm, this.id).subscribe(
      data => this.handleRecordResponse()
    );
  }

  updateRecord(){
    this.recordForm.id = this.recordId;
    this.recordForm.client_id = this.id;
    this.recordForm.content = this.recordContent;

    this.sumbitReset();

    this.client.updateRecord(this.recordForm, this.id, this.recordId).subscribe(
      data => this.handleRecordResponse()
    );
  }

  deleteRecord(recordId){
    this.client.deleteRecord(this.id, recordId).subscribe(
      data => this.handleRecordResponse()
    );
  }

  RemoveRecordContent(){
    this.recordContent = null;
  }

  setRecord(recordId, content){
    this.recordId = recordId;
    this.recordContent = content;
  }

  handleRecordResponse(){
    this.client.getClient(this.id).subscribe(clientInfo => {

      this.clientInfo = clientInfo.data; // store client info

      this.client.getRecords(clientInfo.data.href.records).subscribe(records => {
          this.records = records.data;
      });

    }); // end getClient
  }

  /************************** 会员记录 end **************************/

} // end class
