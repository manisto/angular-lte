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
    templateUrl: 'angular-lte/components/SmallBoxComponent.html'
};