import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStorageComponent } from './history-storage.component';

describe('HistoryStorageComponent', () => {
  let component: HistoryStorageComponent;
  let fixture: ComponentFixture<HistoryStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
