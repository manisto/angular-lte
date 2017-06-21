const sidebarCollapseClass = 'sidebar-collapse';
const sidebarOpenClass = 'sidebar-open';

export class BodyController implements ng.IController {
    static $inject: string[] = ['$element'];

    $element: ng.IAugmentedJQuery;

    sidebarCollapsed: boolean = false;

    constructor($element: ng.IAugmentedJQuery) {
        this.$element = $element;
    }

    toggleSidebar(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.$element.toggleClass(sidebarCollapseClass, this.sidebarCollapsed);
        this.$element.toggleClass(sidebarOpenClass, !this.sidebarCollapsed);
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
