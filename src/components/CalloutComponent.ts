import * as fs from 'fs';

export let CalloutComponent: ng.IComponentOptions = {
    bindings: {
        type: '<',
        title: '<'
    },
    transclude: true,
    template: fs.readFileSync(__dirname + '/CalloutComponent.html', 'utf-8')
};