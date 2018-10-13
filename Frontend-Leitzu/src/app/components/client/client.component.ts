import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/clients';
import { Records } from '../../interfaces/records';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

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

  public isClientAndRecordDataLoaded = false;

  public isClientDataUpdated = true;

  public isRecordDataCreated = true;

  public isRecordDataUpdated = true;

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
    private router: Router,
    private _location: Location
  ) { }

  /**
   * Init
   * Get client's info and his/her records
   */
  ngOnInit() {
    this.route.params.subscribe(params => { this.id = params['id']; });

    this.getClientAndRecord();
  }

  

  /* -------------------------- 公用方法 -------------------------- */

  back(){
    this._location.back();
  }

  getClientAndRecord(){
    this.client.getClient(this.id).subscribe(
      clientInfo => {
        

        this.client.getRecords(clientInfo.data.href.records).subscribe(
          records => this.handleGetClientAndRecordResponse(clientInfo, records),
          error => this.handleError(error)
        );

      },
      error => this.handleError(error)
    );
  }

  handleGetClientAndRecordResponse(clientInfo, records){
    this.clientInfo = clientInfo.data;
    this.records = records.data;

    this.isClientAndRecordDataLoaded = true;
    this.isRecordDataCreated = true;
    this.isRecordDataUpdated = true;
  }

  handleError(error){
    this.temp_err = 1;
    this.error = error.error.errors;

    this.isClientAndRecordDataLoaded = true;
    this.isClientDataUpdated = true;
    this.isRecordDataCreated = true;
    this.isRecordDataUpdated = true;
  }

  /************************** 公用方法 end **************************/


  /* -------------------------- 会员基本信息 -------------------------- */

  // html onclick event lead to this function
  resetSuccess(){
    this.success = null;
  }

  onSubmit(){
    this.sumbitReset();
    this.isClientDataUpdated = false;

    this.client.updateClient(this.clientInfo).subscribe(
      data => this.handleResponse(),
      error => this.handleError(error)
    );
    
  }

  handleResponse(){
    this.success = 1;
    this.isClientDataUpdated = true;
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

    this.isRecordDataCreated = false;

    this.sumbitReset();

    this.client.createRecord(this.recordForm, this.id).subscribe(
      data => this.handleRecordResponse(),
      error => this.handleError(error)
    );
  }

  updateRecord(){
    this.recordForm.id = this.recordId;
    this.recordForm.client_id = this.id;
    this.recordForm.content = this.recordContent;

    this.isRecordDataUpdated = false;

    this.sumbitReset();

    this.client.updateRecord(this.recordForm, this.id, this.recordId).subscribe(
      data => this.handleRecordResponse(),
      error => this.handleError(error)
    );
  }

  deleteRecord(recordId){
    this.isRecordDataUpdated = false;
    
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
    this.getClientAndRecord();
  }

  /************************** 会员记录 end **************************/

} // end class
