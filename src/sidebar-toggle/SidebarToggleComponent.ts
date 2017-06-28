import * as fs from 'fs';
import { BodyController } from './BodyDirective';

const sidebarCollapseClass = 'sidebar-collapse';
const sidebarOpenClass = 'sidebar-open';

class SidebarToggleController implements ng.IOnInit {
    static $inject: string[] = [];

    body: BodyController;
    screenReaderHint: string;

    $onInit() {
        this.screenReaderHint = this.screenReaderHint || 'Toggle navigation';
    }

    toggleSidebar(): void {
        this.body.toggleSidebar();
    }
}

export let SidebarToggleComponent: ng.IComponentOptions = {
    require: {
        body: '^^lteBody'
    },
    bindings: {
        screenReaderHint: '@'
    },
    template: fs.readFileSync(__dirname + '/SidebarToggleComponent.html', 'utf-8'),
    controller: SidebarToggleController
};