const DURATION: number = .4;

export class AnimateService {
    constructor(private $animateCss: ng.animate.IAnimateCssService) { }

    private startAnimation(element: ng.IAugmentedJQuery): void {
        element.css({
            display: 'block',
            overflow: 'hidden'
        });
    }

    private endAnimation(element: ng.IAugmentedJQuery, expand: boolean): void {
        element.css({
            display: expand ? 'block' : 'none',
            overflow: '',
            height: '',
            paddingTop: '',
            paddingBottom: ''
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

        let style = window.getComputedStyle(element[0]);

        let collapsedSettings = {
            height: '0',
            paddingTop: '0',
            paddingBottom: '0'
        };
        
        let expandedSettings = {
            height: style.height,
            paddingTop: style.paddingTop,
            paddingBottom: style.paddingBottom
        };

        let from = expand ? collapsedSettings : expandedSettings;
        let to = expand ? expandedSettings : collapsedSettings;

        return this.$animateCss(element, {
            duration: DURATION,
            easing: 'ease',
            from: from,
            to: to
        }).start().finally(() => {
            this.endAnimation(element, expand);
        });
    }
}

AnimateService.$inject = ['$animateCss'];