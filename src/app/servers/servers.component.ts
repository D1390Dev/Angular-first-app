import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = '';
  servers = ['TestServer','TesteServer2'];

  constructor(){
      setTimeout(() => {
          this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit(): void {
  }

  //Función evento click mouse
  onCreatedServer (){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!';
    this.servers.push(this.serverName);
  }
  //Función evento input y $event
  onUpdateServerName (event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
