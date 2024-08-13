import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { IconComponentComponent } from './components/icon-component/icon-component.component';
import { ImgComponentComponent } from './perfilComponent/img-component/img-component.component';
import { AboutMeComponentComponent } from './perfilComponent/about-me-component/about-me-component.component';
import { MsgComponentComponent } from './perfilComponent/msg-component/msg-component.component';
import { TechComponentComponent } from './techcomponents/tech-component/tech-component.component';
import { ExperienceComponentComponent } from './techcomponents/experience-component/experience-component.component';
import { ProjectComponentComponent } from './techcomponents/project-component/project-component.component';
import { FuorComponentComponent } from './carrerComponent/fuor-component/fuor-component.component';
import { TitleComponent } from './carrerComponent/title/title.component';
import { ExperiencesComponent } from './carrerComponent/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TitleComponentComponent,
    IconComponentComponent,
    ImgComponentComponent,
    AboutMeComponentComponent,
    MsgComponentComponent,
    TechComponentComponent,
    ExperienceComponentComponent,
    ProjectComponentComponent,
    FuorComponentComponent,
    TitleComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
