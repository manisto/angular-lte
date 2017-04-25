const DURATION: number = .4;

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

export let TreeviewDirective: ng.IDirectiveFactory = function($animateCss: ng.animate.IAnimateCssService) {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        controller: TreeviewController,
        controllerAs: 'vm',
        bindToController: true,
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: TreeviewController) {
            function startAnimation(): void {
                ctrl.menuElement.css({
                    display: 'block',
                    overflow: 'hidden',
                    height: 'auto'
                });
            }

            function endAnimation(): void {
                ctrl.menuElement.css({
                    display: '',
                    overflow: '',
                    height: ''
                });
            }

            function animateHeight(expand: boolean): ng.IPromise<void> {
                startAnimation();

                let height = ctrl.menuElement[0].scrollHeight + 'px';
                let from = expand ? '0' : height;
                let to = expand ? height: '0';

                return $animateCss(ctrl.menuElement, {
                    duration: DURATION,
                    easing: 'ease',
                    from: { height: from },
                    to: { height: to }
                }).start().finally(() => {
                    endAnimation();
                });
            }

            function expand() {
                if (element.hasClass('active')) {
                    return;
                }

                animateHeight(true)
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

                animateHeight(false)
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

TreeviewDirective.$inject = ['$animateCss'];