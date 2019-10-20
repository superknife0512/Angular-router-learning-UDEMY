import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
      private curRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
      this.curRoute.params.subscribe(params=>{
        console.log(params);
        this.server = this.serversService.getServer(+params['id'] || 1);
      })
  }

  editServer(id: number){
    this.router.navigate(['servers', id, 'edit'], {
      queryParamsHandling: 'preserve'
    });
  }

}
