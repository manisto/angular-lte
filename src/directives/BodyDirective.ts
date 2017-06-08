const collapsedClass = 'sidebar-collapse';

export class BodyController implements ng.IController {
    static $inject: string[] = ['$element'];

    $element: ng.IAugmentedJQuery;

    sidebarCollapsed: boolean = false;

    constructor($element: ng.IAugmentedJQuery) {
        this.$element = $element;
    }

    toggleSidebar(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.$element.toggleClass(collapsedClass, this.sidebarCollapsed);
    }
}

export let BodyDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: {},
        controller: BodyController,
        controllerAs: 'vm',
        bindToController: {}
    };

    return directive;
};
