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

            function animateHeight(from: string, to: string): ng.animate.IAnimateCssRunner {
                return $animateCss(ctrl.menuElement, {
                    duration: DURATION,
                    easing: 'ease',
                    from: { height: from },
                    to: { height: to }
                });
            }

            function expand() {
                if (element.hasClass('active')) {
                    return;
                }

                startAnimation();

                animateHeight('0', ctrl.menuElement[0].scrollHeight + 'px')
                    .start()
                    .finally(() => {
                        endAnimation();
                        element.addClass('active');
                        ctrl.menuElement.addClass('menu-open');
                    });
            }

            function collapse() {
                if (!element.hasClass('active')) {
                    return;
                }

                startAnimation();
                element.removeClass('active');

                animateHeight(ctrl.menuElement[0].scrollHeight + 'px', '0')
                    .start()
                    .finally(() => {
                        endAnimation();
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