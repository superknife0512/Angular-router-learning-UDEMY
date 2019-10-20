import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  isEdit: boolean = false;

  constructor(private serversService: ServersService,
      private curRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.curRoute.params.subscribe((params: Params) =>{ 
      this.server = this.serversService.getServer(+params['id'] || 1);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    })
    
    this.curRoute.queryParams.subscribe(params=>{
      if(params['allow'] === '1') {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
