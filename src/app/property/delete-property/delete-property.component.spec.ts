import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePropertyComponent } from './delete-property.component';

describe('DeletePropertyComponent', () => {
  let component: DeletePropertyComponent;
  let fixture: ComponentFixture<DeletePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
