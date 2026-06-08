package com.attus.incidentmanager.api.dto;

import com.attus.incidentmanager.domain.model.Priority;
import com.attus.incidentmanager.domain.model.Status;
import jakarta.validation.constraints.NotBlank;

public class TicketRequest {
    @NotBlank(message = "Título é obrigatório")
    private String title;
    @NotBlank(message = "Descrição é obrigatória")
    private String description;
    private Priority priority;
    private Status status;

    // Getters e Setters Manuais
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Priority getPriority() { return priority; }
    public void setPriority(Priority priority) { this.priority = priority; }
    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
}