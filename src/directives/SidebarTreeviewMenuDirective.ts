import {SidebarTreeviewController} from './SidebarTreeviewDirective';

export let SidebarTreeviewMenuDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: '^^lteSidebarTreeview',
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, sidebarTreeviewController: SidebarTreeviewController) {
            sidebarTreeviewController.menuElement = element;
        }
    };

    return directive;
};

SidebarTreeviewMenuDirective.$inject = [];