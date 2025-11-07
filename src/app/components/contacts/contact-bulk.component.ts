import { Component } from '@angular/core';
import { ContactService } from '../../services/contacts.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-contact-bulk',
    templateUrl: './contact-bulk.component.html',
    styleUrls: ['./contact-bulk.component.css']
})
export class ContactBulkComponent {
    jsonInput = '';
    successMessage = '';
    errorMessage = '';


    constructor(private contactService: ContactService, private router: Router) { }


    onSubmit(): void {
        try {
            const jsonData = JSON.parse(this.jsonInput);
            this.contactService.bulk(jsonData).subscribe({
                next: () => {
                    this.successMessage = 'Carga masiva completada';
                    this.errorMessage = '';
                    setTimeout(() => this.router.navigate(['/contacts']), 1000);
                },
                error: (err) => {
                    this.errorMessage = 'Error en la carga masiva';
                    console.error(err);
                }
            });
        } catch (e) {
            this.errorMessage = 'JSON inválido';
        }
    }
}



