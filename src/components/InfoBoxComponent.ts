import * as fs from 'fs';

export let InfoBoxComponent:ng.IComponentOptions = {
    bindings: {
        type: '@',
        icon: '@',
        text: '@',
        number: '<'
    },
    template: fs.readFileSync(__dirname + '/InfoBoxComponent.html', 'utf-8')
};