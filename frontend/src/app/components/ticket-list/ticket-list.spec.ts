import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketListComponent } from './ticket-list';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TicketListComponent, 
        HttpClientTestingModule, 
        RouterModule.forRoot([]) 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});