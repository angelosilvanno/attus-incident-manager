package com.attus.incidentmanager.domain.service;

import com.attus.incidentmanager.api.dto.TicketRequest;
import com.attus.incidentmanager.domain.model.Ticket;
import com.attus.incidentmanager.domain.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@SuppressWarnings("null")
@Slf4j 
@RequiredArgsConstructor 
public class TicketService {

    private final TicketRepository repository;

    @Transactional
    public Ticket create(TicketRequest request) {
        log.info("Criando novo ticket: {}", request.getTitle());
        
        Ticket ticket = Ticket.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .priority(request.getPriority())
                .build();

        return repository.save(ticket);
    }

    public List<Ticket> listAll() {
        return repository.findAll();
    }

    @Transactional
    public Ticket update(UUID id, TicketRequest request) {
        log.info("Atualizando ticket ID: {}", id);
        
        Ticket ticket = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket não encontrado"));

        ticket.setTitle(request.getTitle());
        ticket.setDescription(request.getDescription());
        ticket.setPriority(request.getPriority());
        ticket.setStatus(request.getStatus());

        return repository.save(ticket);
    }
}