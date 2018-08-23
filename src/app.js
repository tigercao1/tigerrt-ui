import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {FetchConfig, AuthorizeStep} from 'aurelia-auth';
import AppRouterConfig from './app-router-config';
@inject(Router, FetchConfig, AppRouterConfig)
export class App {

  constructor(router, fetchConfig, appRouterConfig){
    this.router = router;
    this.fetchConfig = fetchConfig;
    this.appRouterConfig = appRouterConfig;
    this.message = "Welcome!";
  }

  activate() {
    this.appRouterConfig.configure();
    this.fetchConfig.configure();
  }
}