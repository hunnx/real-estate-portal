import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryByPropertyComponent } from './enquiry-by-property.component';

describe('EnquiryByPropertyComponent', () => {
  let component: EnquiryByPropertyComponent;
  let fixture: ComponentFixture<EnquiryByPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryByPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryByPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
