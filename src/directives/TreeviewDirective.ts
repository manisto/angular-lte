import {AnimateService} from '../services/AnimateService';

export class TreeviewController implements ng.IController {
    expanded: boolean;
    toggleElement: ng.IAugmentedJQuery;
    menuElement: ng.IAugmentedJQuery;

    $onInit() {
        this.expanded = false;
    }

    toggle() {
        this.expanded = !this.expanded;
    }
}

export let TreeviewDirective: ng.IDirectiveFactory = function(lteAnimateService: AnimateService) {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        controller: TreeviewController,
        controllerAs: 'vm',
        bindToController: true,
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: TreeviewController) {
            function expand() {
                if (element.hasClass('active')) {
                    return;
                }

                lteAnimateService.expand(ctrl.menuElement)
                    .then(() => {
                        element.addClass('active');
                        ctrl.menuElement.addClass('menu-open');
                    });
            }

            function collapse() {
                if (!element.hasClass('active')) {
                    return;
                }

                element.removeClass('active');

                lteAnimateService.collapse(ctrl.menuElement)
                    .then(() => {
                        ctrl.menuElement.removeClass('menu-open');
                    });
            }

            scope.$watch('vm.expanded', (shouldExpand: boolean) => {
                let settings: ng.animate.IAnimationOptions;

                if (shouldExpand) {
                    expand();
                } else {
                    collapse();
                }
            });
        }
    };

    return directive;
};

TreeviewDirective.$inject = ['lteAnimateService'];