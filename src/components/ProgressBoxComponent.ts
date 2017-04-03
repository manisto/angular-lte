import * as fs from 'fs';

export let ProgressBoxComponent:ng.IComponentOptions = {
    bindings: {
        type: '@',
        icon: '@',
        text: '@',
        number: '<',
        progress: '<',
        description: '@'
    },
    template: fs.readFileSync(__dirname + '/ProgressBoxComponent.html', 'utf-8')
};