import {TreeviewMenuController} from './TreeviewMenuDirective';

const ACTIVE_CLASS = 'active';

export class TreeviewController implements ng.IController, ng.IOnChanges, ng.IOnInit {
    static $inject: string[] = ['$element'];

    expanded: boolean = false;
    menu: TreeviewMenuController;
    parentTreeview: TreeviewController;
    childTreeviews: TreeviewController[] = [];
    $element: ng.IAugmentedJQuery;

    constructor($element: ng.IAugmentedJQuery) {
        this.$element = $element;
    }

    setMenu(menu: TreeviewMenuController): void {
        this.menu = menu;
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

            if (activeChange.currentValue) {
                this.expand();
            } else {
                this.collapse();
            }
        }
    }

    titleClicked() {
        if (this.expanded && this.menu) {
            this.collapse();
        } else {
            this.expand();
        }
    }

    expand(): void {
        if (this.expanded) {
            return;
        }

        if (this.parentTreeview) {
            this.parentTreeview.collapseAllBut(this);
        }

        if (!this.menu) {
            this.setState(true);
            return;
        }

        this.menu.expand()
            .then(() => {
                this.setState(true);
            });
    }

    collapse(): void {
        if (!this.expanded) {
            return;
        }

        if (!this.menu) {
            this.setState(false);
            return;
        }

        this.menu.collapse()
            .then(() => {
                this.setState(false);
            });
    }

    setState(expanded: boolean): void {
        this.expanded = expanded;
        this.$element.toggleClass(ACTIVE_CLASS, expanded);
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

export let TreeviewDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: {
            body: '^^lteBody',
            parentTreeview: '?^^lteTreeview'
        },
        controller: TreeviewController,
        bindToController: {
            active: '<'
        }
    };

    return directive;
};

TreeviewDirective.$inject = [];