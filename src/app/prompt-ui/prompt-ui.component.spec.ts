import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptUiComponent } from './prompt-ui.component';

describe('PromptUiComponent', () => {
  let component: PromptUiComponent;
  let fixture: ComponentFixture<PromptUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
