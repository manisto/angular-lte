import * as fs from 'fs';

export let SmallBoxComponent:ng.IComponentOptions = {
    bindings: {
        type: '@',
        title: '@',
        text: '@',
        icon: '@',
        lteClick: '&',
        linkText: '@'
    },
    transclude: {
        title: '?boxTitle',
        text: '?boxText'
    },
    template: fs.readFileSync(__dirname + '/SmallBoxComponent.html', 'utf-8')
};