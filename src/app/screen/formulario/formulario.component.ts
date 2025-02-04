import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { FormsModule } from '@angular/forms';
import { FormularioService } from '../../service/formulario.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {  
  isMobile: any;
  constructor(private formularioService: FormularioService, public platform: Platform) {
  }
  
  async solicitarPermisos() {
    const permissions = await Camera.requestPermissions();
    // Manejar la respuesta de permisos si es necesario
  }
  
  async ngOnInit() {
    const permissions = await Camera.requestPermissions();
    this.isMobile = Capacitor.getPlatform();
    console.log("1");
    
    console.log(this.isMobile);
    
  }
  
  imagenSeleccionada: any = null;
  imagenBase64: string | null = null;

  // Agrega un modelo para los campos del formulario
  formularioData = {
    dni: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    numeroConfirmacion: ''
  };

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagenSeleccionada = input.files[0];

      // Convertir la imagen a Base64 para mostrarla como vista previa
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenBase64 = reader.result as string;
      };
      reader.readAsDataURL(this.imagenSeleccionada);

      console.log('Imagen seleccionada:', this.imagenSeleccionada);
    }
  }

  async seleccionarImagen() {
    if (Capacitor.getPlatform() === 'web') {
      // Para la web, utiliza un input file en la plantilla HTML
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
          this.imagenSeleccionada = file;

          // Convertir la imagen a Base64 para mostrarla como vista previa
          const reader = new FileReader();
          reader.onload = () => {
            this.imagenBase64 = reader.result as string;
          };
          reader.readAsDataURL(this.imagenSeleccionada);
        }
      };
      input.click();
    } else {
      //pedir permisosen los celulares para acceder asus alamacenamiento
    const permissions = await Camera.requestPermissions();
      // Para plataformas nativas, utiliza el plugin de la cámara
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
          source: CameraSource.Photos // Esto abre la galería de fotos
        });

        if (image.webPath) {
          // Mostrar la imagen seleccionada en la interfaz
          this.imagenBase64 = image.webPath;

          // Convertir la imagen a un archivo para enviarla en el formulario
          const response = await fetch(image.webPath);
          const blob = await response.blob();
          this.imagenSeleccionada = new File([blob], 'imagen.jpg', { type: blob.type });
        }
      } catch (error) {
        console.error('Error al seleccionar imagen:', error);
      }
    }
  }

    
  eliminarImagen(): void {
    this.imagenSeleccionada = null;
    this.imagenBase64 = null;
  }

  enviarFormulario(): void {
    const formData = new FormData();
    formData.append('dni', this.formularioData.dni);
    formData.append('nombres', this.formularioData.nombres);
    formData.append('apellidos', this.formularioData.apellidos);
    formData.append('telefono', this.formularioData.telefono);
    formData.append('direccion', this.formularioData.direccion);
    formData.append('numeroConfirmacion', this.formularioData.numeroConfirmacion);
  
    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }
  
    this.formularioService.cargarFomulario(formData);
  }
  
  
}
