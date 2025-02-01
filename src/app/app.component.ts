import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { PremiosComponent } from "./screen/premios/premios.component";
import { SobreNosotrosComponent } from "./screen/sobre-nosotros/sobre-nosotros.component";
import { VideoComponent } from "./screen/video/video.component";
import { PremioMayorComponent } from "./screen/premio-mayor/premio-mayor.component";
import { FormularioComponent } from "./screen/formulario/formulario.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GanadoresComponent } from "./screen/ganadores/ganadores.component";
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    HeaderComponent,
    PremiosComponent,
    SobreNosotrosComponent,
    VideoComponent,
    PremioMayorComponent,
    FormularioComponent,
    RouterOutlet,
    GanadoresComponent
],
  providers: [],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SorteosVors';
  
}
