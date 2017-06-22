import * as fs from 'fs';

export class BoxController implements ng.IController {
    static $inject: string[] = ['$transclude'];

    $transclude: ng.ITranscludeFunction;
    collapsed: boolean;
    removed: boolean;
    onRemoved: () => void;

    constructor($transclude: ng.ITranscludeFunction) {
        this.$transclude = $transclude;
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
        collapsable: '<',
        collapsed: '<',
        removable: '<',
        onRemoved: '&'
    },
    transclude: {
        header: '?boxHeader',
        toolbar: '?boxToolbar',
        body: 'boxBody',
        footer: '?boxFooter'
    },
    template: fs.readFileSync(__dirname + '/BoxComponent.html', 'utf-8'),
    controller: BoxController
};