import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.scss'
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.carregarTickets();
  }

  carregarTickets(): void {
    this.ticketService.listarTodos().subscribe({
      next: (dados) => {
        this.tickets = dados;
        console.log('Tickets carregados:', dados);
      },
      error: (erro) => {
        console.error('Erro ao buscar tickets:', erro);
      }
    });
  }

  getPriorityClass(priority: string): string {
    const mapping: any = {
      'CRITICAL': 'badge bg-danger',
      'HIGH': 'badge bg-warning text-dark',
      'MEDIUM': 'badge bg-info text-dark',
      'LOW': 'badge bg-success'
    };
    return mapping[priority] || 'badge bg-secondary';
  }
}