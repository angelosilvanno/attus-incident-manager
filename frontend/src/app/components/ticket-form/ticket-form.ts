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
  
  feedbackMessage: string | null = null;
  isError = false;

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

      this.ticketService.listarTodos().subscribe(tickets => {
        const ticket = tickets.find(t => t.id === id);

        if (ticket) {
          this.ticketForm.patchValue(ticket);
        }
      });
    }
  }

  salvar() {
    if (this.ticketForm.valid) {
      this.ticketService.criar(this.ticketForm.value).subscribe({
        next: () => {
          this.showFeedback('Incidente registrado com sucesso!', false);
          setTimeout(() => this.router.navigate(['/']), 1500);
        },
        error: (err) => {
          console.error('Erro ao salvar incidente:', err);
          this.showFeedback('Falha ao salvar o incidente. Verifique a conexão com o servidor.', true);
        }
      });
    }
  }

  private showFeedback(message: string, error: boolean) {
    this.feedbackMessage = message;
    this.isError = error;
    
    if (error) {
      setTimeout(() => this.feedbackMessage = null, 5000);
    }
  }
}