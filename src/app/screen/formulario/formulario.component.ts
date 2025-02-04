import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioService } from '../../service/formulario.service';


@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private formularioService: FormularioService) {}
  imagenSeleccionada: File | null = null;
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
      this.formularioService.cargarFomulario(formData)  
    }
  }  
}
