import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPieComponent } from './my-pie.component';

describe('MyPieComponent', () => {
  let component: MyPieComponent;
  let fixture: ComponentFixture<MyPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
