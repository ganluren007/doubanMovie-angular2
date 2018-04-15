import { NgModule } from "@angular/core";
import { imports } from "./module-config/imports";

import { components } from "./component";
import { providers } from "./srevice";
import { directiveDeclarations } from "./directive";

const { AppComponent, componentDeclarations } = components;
const declarations = [].concat(componentDeclarations, directiveDeclarations);

@NgModule({
  imports,
  declarations,
  providers,
  bootstrap: [AppComponent]
})
export class AppModule {}
