import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { PremiosComponent } from "./screen/premios/premios.component";
import { SobreNosotrosComponent } from "./screen/sobre-nosotros/sobre-nosotros.component";
import { VideoComponent } from "./screen/video/video.component";
import { FormularioParticiparComponent } from "./screen/formulario-participar/formulario-participar.component";
import { PremioMayorComponent } from "./screen/premio-mayor/premio-mayor.component";

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, PremiosComponent, SobreNosotrosComponent, VideoComponent, FormularioParticiparComponent, PremioMayorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SorteosVors';
  
}
