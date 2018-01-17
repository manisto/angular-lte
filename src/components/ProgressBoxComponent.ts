export let ProgressBoxComponent: ng.IComponentOptions = {
  bindings: {
    type: "@",
    icon: "@",
    text: "@",
    number: "<",
    progress: "<",
    description: "@"
  },
  templateUrl: "angular-lte/components/ProgressBoxComponent.html"
};
