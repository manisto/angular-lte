import {componentsModule} from './components/components.module';
import {directivesModule} from './directives/directives.module';

export let angularLteModule = angular.module('angular-lte', [
    componentsModule.name,
    directivesModule.name
]);