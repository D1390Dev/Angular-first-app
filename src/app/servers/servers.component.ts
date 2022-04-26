import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor(){
      setTimeout(() => {
          this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit(): void {
  }

  //Función evento click mouse
  onCreatedServer (){
    this.serverCreationStatus = 'Server was created!';
  }
  //Función evento input y $event
  onUpdateServerName (event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
