import { RouterModule, Routes } from '@angular/router';
import { SobremiComponent } from './sobremi/sobremi.component';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  {
    path:'sobremi',
    component:SobremiComponent
  },
  {
    path:'cv',
    component:CvComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path :'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

