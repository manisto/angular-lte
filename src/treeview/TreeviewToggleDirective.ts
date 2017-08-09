import * as fs from 'fs';
import {TreeviewController} from './TreeviewDirective';

class TreeviewToggleController {

}

export let TreeviewToggleDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        transclude: true,
        template: fs.readFileSync(__dirname + '/TreeviewToggleDirective.html', 'utf-8'),
        controller: TreeviewToggleController,
        controllerAs: '$ctrl',
        bindToController: {
            icon: '@',
            header: '@'
        },
        require: '^^lteTreeview',
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, treeviewController: TreeviewController) {
            if (!element.attr('href')) {
                element.attr('href', '');
            }

            function toggleTreeview(event: JQueryEventObject) {
                scope.$apply(() => {
                    treeviewController.toggle();
                });
            };

            element.on('click', toggleTreeview);

            scope.$on('$destroy', () => {
                element.off('click', toggleTreeview);
            });
        }
    };

    return directive;
};

TreeviewToggleDirective.$inject = [];