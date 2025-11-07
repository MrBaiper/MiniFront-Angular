import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = '';
  loading = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['cand_0029@larueda.com', [Validators.required, Validators.email]],
      password: ['Password123', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
  if (this.form.invalid) return;
  this.error = '';
  this.loading = true;

  const { email, password } = this.form.value;

  this.auth.login(email, password).subscribe({
    next: (data) => {
      console.log('Login exitoso:', data);  

      // 👇 Guarda el token en localStorage
      localStorage.setItem('token', data.token);

      this.loading = false;
      this.router.navigate(['/contacts']);
    },
    error: (e) => {
      console.error('Error completo del backend:', e);
      this.loading = false;
      this.error = e.error?.message || 'Login incorrecto';
    }
  });
}

}







