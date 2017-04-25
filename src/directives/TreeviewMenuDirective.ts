import {TreeviewController} from './TreeviewDirective';

export let TreeviewMenuDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: '^^lteTreeview',
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, treeviewController: TreeviewController) {
            treeviewController.menuElement = element;
        }
    };

    return directive;
};

TreeviewMenuDirective.$inject = [];