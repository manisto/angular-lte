export let InfoBoxComponent:ng.IComponentOptions = {
    bindings: {
        type: '@',
        icon: '@',
        text: '@',
        number: '<'
    },
    templateUrl: 'angular-lte/components/InfoBoxComponent.html'
};