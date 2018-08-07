import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {FetchConfig} from 'aurelia-auth';
@inject(Router,FetchConfig, AppRouterConfig )
export class App {

  constructor(router, fetchConfig, appRouterConfig){
    this.router = router;
    this.fetchConfig = fetchConfig;
    this.message = "Welcome!"
  }

  activate(){
    this.fetchConfig.configure();
  }
}