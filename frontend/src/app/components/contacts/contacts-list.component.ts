import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contacts.service';

@Component({
    selector: 'app-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
    contacts: any[] = [];
    loading = false;


    constructor(private contactService: ContactService) { }


    ngOnInit(): void {
        this.getContacts();
    }


    getContacts(): void {
        this.loading = true;
        this.contactService.list().subscribe({
            next: (data) => {
                console.log('Respuesta de la API (contacts):', data); // 👈 agrega esto
                this.contacts = data.data || data; // si viene dentro de "data"
                this.loading = false;
            },
            error: (err) => {
                console.error('Error al listar contactos:', err);
                this.loading = false;
            }
        });
    }
}





