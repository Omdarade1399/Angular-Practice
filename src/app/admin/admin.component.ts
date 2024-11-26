import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  model: any = {};
  cover!: string;
  cover_file: any;
  showError = false;

  onFileSelected($event: any){
    const file = $event.target.files[0];
    if(file){
      this.cover_file = file;
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result!.toString();
        this.cover = dataURL;
      }
      reader.readAsDataURL(file)
      this.showError = false
    }
  }

  onSubmit(form: NgForm) {
    if(form.invalid || !this.cover){
      form.control.markAllAsTouched();
      if(!this.cover){
        this.showError = true;
      }
      return;
    }
  }
}
