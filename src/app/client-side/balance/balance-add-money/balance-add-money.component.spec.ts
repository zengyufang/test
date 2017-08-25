import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAddMoneyComponent } from './balance-add-money.component';

describe('BalanceAddMoneyComponent', () => {
  let component: BalanceAddMoneyComponent;
  let fixture: ComponentFixture<BalanceAddMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceAddMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceAddMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
