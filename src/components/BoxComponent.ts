import * as fs from 'fs';

export class BoxController implements ng.IController, ng.IOnChanges {
    static $inject: string[] = ['$transclude'];
    collapsed: boolean;
    removed: boolean;
    onRemoved: () => void;

    constructor(private $transclude: ng.ITranscludeFunction) { }

    $onChanges(changes: ng.IOnChangesObject) {
        let collapsedChange: ng.IChangesObject<boolean> = changes['collapsed'];

        if (changes['collapsed']) {

            if(collapsedChange.isFirstChange()) {
                return;
            }
        }
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
        body: 'boxBody',
        footer: '?boxFooter'
    },
    template: fs.readFileSync(__dirname + '/BoxComponent.html', 'utf-8'),
    controller: BoxController
};