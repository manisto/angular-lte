import {boxModule} from './box/box.module';
import {bodyModule} from './body/body.module';
import {treeviewModule} from './treeview/treeview.module';
import {sidebarToggleModule} from './sidebar-toggle/sidebar-toggle.module';
import {wrapperModule} from './wrapper/wrapper.module';
import {componentsModule} from './components/components.module';
import {collapseModule} from './collapse/collapse.module';

import {Options} from './Options';

export let angularLteModule = angular.module('angular-lte', [
    boxModule.name,
    bodyModule.name,
    treeviewModule.name,
    sidebarToggleModule.name,
    wrapperModule.name,
    componentsModule.name,
    collapseModule.name,
]);

angularLteModule.constant('lteOptions', Options);