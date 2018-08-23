import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {PLATFORM} from "aurelia-framework";

@inject(Router)
export default class{
	constructor(router){
		this.router = router;
	}

    configure() {
        var appRouterConfig = function(config) {
            config.title = 'Random Thought';
            config.options.pushState = true;
            config.options.root = '/';
            config.addPipelineStep('authorize', AuthorizeStep);

            config.map ([
                {
                    route: ['login'],
                    name: 'login',
                    moduleId: PLATFORM.moduleName('pages/login/login'),
                    nav: true,
                    title: 'Login'
                },
                {
                    route: 'signup',
                    name: 'signup',
                    moduleId: PLATFORM.moduleName('pages/signup/signup'),
                    nav: true,
                    title: 'Sign Up'
                },
                {
                    route: [''],
                    name: 'home',
                    moduleId: PLATFORM.moduleName('pages/home/home'),
                    nav: true,
                    title: 'Home'
                }
            ]);
            config.mapUnknownRoutes(PLATFORM.moduleName('pages/not-found/not-found'))
        }
        this.router.configure(appRouterConfig);
    }
}
