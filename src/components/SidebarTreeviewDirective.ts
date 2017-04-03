export class SidebarTreeviewController implements ng.IController {
    expanded: boolean;

    $onInit() {
        this.expanded = false;
    }

    toggle() {
        this.expanded = !this.expanded;
    }
}

export let SidebarTreeviewDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        controller: SidebarTreeviewController,
        controllerAs: 'vm',
        bindToController: true,
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
            scope.$watch('vm.expanded', (expanded: boolean) => {
                element.toggleClass('active', expanded);
            });
        }
    };

    return directive;
};

SidebarTreeviewDirective.$inject = [];