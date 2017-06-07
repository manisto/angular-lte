import {AnimateService} from '../services/AnimateService';

const ACTIVE_CLASS = 'active';

export class TreeviewController implements ng.IController, ng.IOnChanges, ng.IOnInit {
    active: boolean;
    toggleElement: ng.IAugmentedJQuery;
    menuElement: ng.IAugmentedJQuery;
    parentTreeview: TreeviewController;
    childTreeviews: TreeviewController[] = [];
    lteAnimateService: AnimateService;
    $element: ng.IAugmentedJQuery;

    constructor(lteAnimateService: AnimateService, $element: ng.IAugmentedJQuery) {
        this.lteAnimateService = lteAnimateService;
        this.$element = $element;
    }

    $onInit() {
        if (this.parentTreeview) {
            this.parentTreeview.attachTreeview(this);
        }
    }

    $onChanges(changes: ng.IOnChangesObject) {
        if (changes.active) {
            let activeChange: ng.IChangesObject<boolean> = changes.active;

            if (activeChange.isFirstChange()) {
                this.setState(!!activeChange.currentValue);
                return;
            }

            this.toggle();
        }
    }

    toggle() {
        if (this.parentTreeview) {
            this.parentTreeview.collapseAllBut(this);
        }

        if (this.active) {
            this.collapse();
        } else {
            this.expand();
        }
    }

    expand(): void {
        if (this.active) {
            return;
        }

        this.lteAnimateService.expand(this.menuElement)
            .then(() => {
                this.setState(true);
            });
    }

    collapse(): void {
        if (!this.active) {
            return;
        }

        this.lteAnimateService.collapse(this.menuElement)
            .then(() => {
                this.setState(false);
            });
    }

    setState(state: boolean): void {
        this.active = state;
        this.$element.toggleClass(ACTIVE_CLASS, state);
    }

    attachTreeview(treeview: TreeviewController): void {
        this.childTreeviews.push(treeview);
    }

    collapseAllBut(treeview: TreeviewController): void {
        this.childTreeviews.forEach((currentChild) => {
            if (treeview === currentChild) {
                return;
            }

            currentChild.collapse();
        });
    }
}

TreeviewController.$inject = ['lteAnimateService', '$element'];

export let TreeviewDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: {
            parentTreeview: '?^^lteTreeview'
        },
        controller: TreeviewController,
        controllerAs: 'vm',
        bindToController: {
            active: '<'
        }
    };

    return directive;
};

TreeviewDirective.$inject = [];