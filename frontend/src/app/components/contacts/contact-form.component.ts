import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contacts.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    contactForm: FormGroup;
    successMessage = '';
    errorMessage = '';


    constructor(
        private fb: FormBuilder,
        private contactService: ContactService,
        private router: Router
    ) {
        this.contactForm = this.fb.group({
            nombre: ['', Validators.required],
            celular: ['', Validators.required],
            placa: ['']
        });
    }


    onSubmit(): void {
        if (this.contactForm.invalid) return;


        this.contactService.create(this.contactForm.value).subscribe({
            next: () => {
                this.successMessage = 'Contacto creado con éxito';
                setTimeout(() => this.router.navigate(['/contacts']), 1000);
            },
            error: (err) => {
                this.errorMessage = 'Error al crear el contacto';
                console.error(err);
            }
        });
    }
}






