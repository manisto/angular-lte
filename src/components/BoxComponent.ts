import * as fs from 'fs';
import { AnimateService } from '../services/AnimateService';

const COLLAPSED_BOX = 'collapsed-box';

export class BoxController implements ng.IController {
    private element: ng.IAugmentedJQuery;
    private bodyElement: ng.IAugmentedJQuery;
    collapsed: boolean;
    onRemoved: Function;

    constructor(private $element: ng.IAugmentedJQuery, private lteAnimateService: AnimateService) { }

    setElement(element: ng.IAugmentedJQuery) {
        this.element = element;
    }

    setBodyElement(element: ng.IAugmentedJQuery) {
        this.bodyElement = element;
    }

    $postLink() {
        if (this.collapsed) {
            this.element.addClass(COLLAPSED_BOX);
        }
    }

    toggleCollapsed() {
        if (this.collapsed) {
            this.lteAnimateService
                .expand(this.bodyElement)
                .then(() => { this.element.removeClass(COLLAPSED_BOX); });
        } else {
            this.lteAnimateService
                .collapse(this.bodyElement)
                .then(() => { this.element.addClass(COLLAPSED_BOX); });
        }

        this.collapsed = !this.collapsed;
    }

    remove() {
        this.lteAnimateService
            .collapse(this.$element)
            .then(() => { this.onRemoved(); });
    }
}

BoxController.$inject = ['$element', 'lteAnimateService'];

export let BoxComponent: ng.IComponentOptions = {
    bindings: {
        type: '@',
        title: '@',
        loading: '<',
        solid: '<',
        collapsable: '<',
        collapsed: '<',
        removable: '<',
        onRemoved: '&'
    },
    transclude: true,
    template: fs.readFileSync(__dirname + '/BoxComponent.html', 'utf-8'),
    controller: BoxController
};