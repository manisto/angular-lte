import * as fs from 'fs';

export class BoxController implements ng.IController {
    static $inject: string[] = [];

    collapsed: boolean;
    removed: boolean;
    onRemoved: () => void;
    toolbarElement: JQuery;
    headerElement: JQuery;
    footerElement: JQuery;

    constructor() {
    }

    setToolbarElement(toolbarElement: JQuery): void {
        this.toolbarElement = toolbarElement;
    }

    setHeaderElement(headerElement: JQuery): void {
        this.headerElement = headerElement;
    }

    setFooterElement(footerElement: JQuery): void {
        this.footerElement = footerElement;
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }

    remove() {
        this.removed = true;
        this.onRemoved();
    }
}

export let BoxComponent: ng.IComponentOptions = {
    bindings: {
        fullWidth: '<',
        type: '@',
        header: '@',
        loading: '<',
        solid: '<',
        skipHeaderBorder: '<',
        collapsable: '<',
        collapsed: '<',
        removable: '<',
        onRemoved: '&'
    },
    transclude: true,
    template: fs.readFileSync(__dirname + '/BoxComponent.html', 'utf-8'),
    controller: BoxController
};