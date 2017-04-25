const DURATION: number = .4;

export class AnimateService {
    constructor(private $animateCss: ng.animate.IAnimateCssService) { }

    private startAnimation(element: ng.IAugmentedJQuery): void {
        element.css({
            display: 'block',
            overflow: 'hidden',
            height: 'auto'
        });
    }

    private endAnimation(element: ng.IAugmentedJQuery): void {
        element.css({
            display: '',
            overflow: '',
            height: ''
        });
    }

    public expand(element: ng.IAugmentedJQuery): ng.IPromise<void> {
        return this.animateHeight(element, true);
    }

    public collapse(element: ng.IAugmentedJQuery): ng.IPromise<void> {
        return this.animateHeight(element, false);
    }

    private animateHeight(element: ng.IAugmentedJQuery, expand: boolean): ng.IPromise<void> {
        this.startAnimation(element);

        let height = element[0].scrollHeight + 'px';
        let from = expand ? '0' : height;
        let to = expand ? height : '0';

        return this.$animateCss(element, {
            duration: DURATION,
            easing: 'ease',
            from: { height: from },
            to: { height: to }
        }).start().finally(() => {
            this.endAnimation(element);
        });
    }
}

AnimateService.$inject = ['$animateCss'];