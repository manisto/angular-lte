import {componentsModule} from './components/components.module';
import {directivesModule} from './directives/directives.module';
import {servicesModule} from './services/services.module';

export let angularLteModule = angular.module('angular-lte', [
    componentsModule.name,
    directivesModule.name,
    servicesModule.name,
]);