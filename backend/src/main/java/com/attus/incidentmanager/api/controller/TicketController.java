package com.attus.incidentmanager.api.controller;

import com.attus.incidentmanager.api.dto.TicketRequest;
import com.attus.incidentmanager.domain.model.Ticket;
import com.attus.incidentmanager.domain.service.TicketService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/tickets")
@RequiredArgsConstructor 
@CrossOrigin(origins = "*")
public class TicketController {

    private final TicketService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Ticket create(@RequestBody @Valid TicketRequest request) {
        return service.create(request);
    }

    @GetMapping
    public List<Ticket> list() {
        return service.listAll(); 
    }

    @PutMapping("/{id}")
    public Ticket update(@PathVariable UUID id, @RequestBody @Valid TicketRequest request) {
        return service.update(id, request);
    }
}