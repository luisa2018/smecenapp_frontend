import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister(): void {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.http.post<any>('http://localhost:8080/users', user).subscribe({
      next: () => {
        alert('Registro exitoso');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error al registrar', err);
        alert('Ocurrió un error al registrar el usuario');
      }
    });
  }
  goToLogin(): void {
  this.router.navigate(['/login']);
}
}
