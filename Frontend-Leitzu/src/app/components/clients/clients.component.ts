import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Clients } from '../../interfaces/clients';
import { PaginateLinks } from '../../interfaces/paginate-links';
import { PaginateInfo } from '../../interfaces/paginate-info';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients: Clients[] = [];

  public paginateLinks: PaginateLinks[] = [];

  public paginateInfo: PaginateInfo[] = [];

  public toPagePath = null;

  public error = null;

  constructor(private client: ClientService) { }

  ngOnInit() {
    this.client.getClients().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.clients = data.data;
    this.paginateLinks = data.links;
    this.paginateInfo = data.meta;
  }

  handleError(error){
    this.error = error.error.error;
  }
  
  // 上一页链接
  prevPage(prevPageLink: string){
    
    this.setData(prevPageLink);
    
  }

  // 下一页链接
  nextPage(nextPageLink: string){
    
    this.setData(nextPageLink);

  }

  // 指定页数链接
  toPage(pageNum: number, basePath: string){

    this.toPagePath = basePath + "?page=" + pageNum;

    this.setData(this.toPagePath);

  }

  setData(apiPath){
    this.client.getRequiredPage(apiPath)
      .subscribe(data => {
        this.clients = data.data;
        this.paginateLinks = data.links
        this.paginateInfo = data.meta;
    });
  }

  getArray(n: number) {
    return Array(n);
  }

  highlighCurrentPage(i: number, current_page: number){
    if(i+1 == current_page){
      return true;
    }

    return false;
  }

  otherPages(i: number, current_page: number){
    if(i+1 == current_page){
      return false;
    }

    return true;
  }

}
