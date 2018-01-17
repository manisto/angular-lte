export interface ToggleCollapsedEvent {
  $event: {
    collapsed: boolean;
  };
}

export class BoxController implements ng.IController, ng.IOnChanges {
  static $inject: string[] = [];

  fullWidth: boolean = false;
  type: string = "default";
  header: string = "";
  loading: boolean = false;
  solid: boolean = false;
  skipHeaderBorder: boolean = false;
  collapsable: boolean = false;
  collapsed: boolean = false;
  removable: boolean = false;
  removed: boolean;
  onRemoved: () => void;
  onToggleCollapsed: ($event: ToggleCollapsedEvent) => void;
  toolbarElement: JQuery;
  headerElement: JQuery;
  footerElement: JQuery;

  constructor() {}

  $onChanges(changes: ng.IOnChangesObject) {
    if (changes["type"]) {
      this.type = this.type || "default";
    }
  }

  setToolbarElement(toolbarElement: JQuery): void {
    this.toolbarElement = toolbarElement;
  }

  setHeaderElement(headerElement: JQuery): void {
    this.headerElement = headerElement;
  }

  setFooterElement(footerElement: JQuery): void {
    this.footerElement = footerElement;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.onToggleCollapsed({
      $event: {
        collapsed: this.collapsed
      }
    });
  }

  remove() {
    this.removed = true;
    this.onRemoved();
  }
}

export let BoxComponent: ng.IComponentOptions = {
  bindings: {
    fullWidth: "<",
    type: "@",
    header: "@",
    loading: "<",
    solid: "<",
    skipHeaderBorder: "<",
    collapsable: "<",
    collapsed: "<",
    onToggleCollapsed: "&",
    removable: "<",
    onRemoved: "&"
  },
  transclude: true,
  templateUrl: "angular-lte/box/BoxComponent.html",
  controller: BoxController
};
