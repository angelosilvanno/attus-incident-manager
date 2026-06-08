import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.scss'
})
export class TicketFormComponent implements OnInit {
  ticketForm: FormGroup;
  isEdition = false;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ticketForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required]],
      priority: ['LOW', Validators.required],
      status: ['OPEN']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdition = true;

    }
  }

  salvar() {
    if (this.ticketForm.valid) {
      this.ticketService.criar(this.ticketForm.value).subscribe({
        next: () => {
          alert('Incidente registrado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro ao salvar incidente:', err);
          alert('Falha ao salvar. Verifique o console.');
        }
      });
    }
  }
}