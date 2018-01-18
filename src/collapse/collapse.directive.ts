const duration: number = 0.4;

export class CollapseController implements ng.IOnChanges {
  static $inject = ["$element", "$animateCss"];

  protected $element: ng.IAugmentedJQuery;
  protected $animateCss: ng.animate.IAnimateCssService;

  constructor(
    $element: ng.IAugmentedJQuery,
    $animateCss: ng.animate.IAnimateCssService
  ) {
    this.$element = $element;
    this.$animateCss = $animateCss;
  }

  $onChanges(changes: ng.IOnChangesObject) {
    let collapsedChange: ng.IChangesObject<boolean> = changes["collapsed"];

    if (!collapsedChange || collapsedChange.isFirstChange()) {
      return;
    }

    if (collapsedChange.currentValue) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  private startAnimation(): void {
    this.$element.css({
      display: "block",
      overflow: "hidden"
    });
  }

  private endAnimation(expand: boolean): void {
    this.$element.css({
      display: expand ? "block" : "none",
      overflow: "",
      height: "",
      paddingTop: "",
      paddingBottom: ""
    });
  }

  public expand(): ng.IPromise<void> {
    return this.animateHeight(true);
  }

  public collapse(): ng.IPromise<void> {
    return this.animateHeight(false);
  }

  private animateHeight(expand: boolean): ng.IPromise<void> {
    this.startAnimation();

    let style = window.getComputedStyle(this.$element[0]);

    let collapsedSettings = {
      height: "0",
      paddingTop: "0",
      paddingBottom: "0"
    };

    let expandedSettings = {
      height: style.height,
      paddingTop: style.paddingTop,
      paddingBottom: style.paddingBottom
    };

    let from = expand ? collapsedSettings : expandedSettings;
    let to = expand ? expandedSettings : collapsedSettings;

    return this.$animateCss(this.$element, {
      duration: duration,
      easing: "ease",
      from: from,
      to: to
    })
      .start()
      .finally(() => {
        this.endAnimation(expand);
      });
  }
}

export let CollapseDirective: ng.IDirectiveFactory = function() {
  let directive: ng.IDirective = {
    scope: {},
    bindToController: {
      collapsed: "<lteCollapse"
    },
    controller: CollapseController
  };

  return directive;
};
