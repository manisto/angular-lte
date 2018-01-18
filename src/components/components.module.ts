import { CalloutComponent } from "./callout.component";
import { InfoBoxComponent } from "./info-box.component";
import { ProgressBoxComponent } from "./progress-box.component";
import { SmallBoxComponent } from "./small-box.component";

export let componentsModule = angular.module("angular-lte.components", []);
componentsModule.component("lteCallout", CalloutComponent);
componentsModule.component("lteInfoBox", InfoBoxComponent);
componentsModule.component("lteProgressBox", ProgressBoxComponent);
componentsModule.component("lteSmallBox", SmallBoxComponent);
