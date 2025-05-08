import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryByAgentComponent } from './enquiry-by-agent.component';

describe('EnquiryByAgentComponent', () => {
  let component: EnquiryByAgentComponent;
  let fixture: ComponentFixture<EnquiryByAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryByAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryByAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
