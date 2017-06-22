import {boxModule} from './box/box.module';
import {componentsModule} from './components/components.module';
import {directivesModule} from './directives/directives.module';

export let angularLteModule = angular.module('angular-lte', [
    boxModule.name,
    componentsModule.name,
    directivesModule.name,
]);