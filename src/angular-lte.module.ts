import {boxModule} from './box/box.module';
import {bodyModule} from './body/body.module';
import {sidebarToggleModule} from './sidebar-toggle/sidebar-toggle.module';
import {componentsModule} from './components/components.module';
import {directivesModule} from './directives/directives.module';

export let angularLteModule = angular.module('angular-lte', [
    boxModule.name,
    bodyModule.name,
    sidebarToggleModule.name,
    componentsModule.name,
    directivesModule.name,
]);