import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-pie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-pie.component.html',
})
export class MyPieComponent implements OnInit {
  @Input() colorPalette: 'primary' | 'warning' | 'success' = 'primary';
  @Input() currentValue = 20;
  @Input() maxValue = 100;
  @Input() strokeWidth = 22;
  @Input() radius = 92;

  componentContainerStyle = {};

  baseColor = '#e0e7ff';
  valueColor = '#6366f1';

  xStart = 0;
  yStart = 0;

  xValue = 0;
  yValue = 0;

  xEnd = 0;
  yEnd = 0;

  ngOnInit(): void {
    switch (this.colorPalette) {
      case 'primary':
        this.baseColor = '#e0e7ff';
        this.valueColor = '#6366f1';
        break;
      case 'warning':
        this.baseColor = '#fef3c7';
        this.valueColor = '#f59e0b';
        break;
      case 'success':
        this.baseColor = '#dcfce7';
        this.valueColor = '#22c55e';
        break;
      default:
        throw new Error('Invalid color pallete');
    }

    if (this.currentValue > this.maxValue) {
      throw new Error('Current value cannot be greater than max value');
    }

    if (this.currentValue < 0) {
      throw new Error('Current value cannot be less than 0');
    }

    if (this.maxValue < 1) {
      throw new Error('Max value cannot be less than 1');
    }

    if (this.strokeWidth < 1) {
      throw new Error('Stroke width cannot be less than 1');
    }

    if (this.radius < 1) {
      throw new Error('Radius cannot be less than 1');
    }

    this.currentValue = Math.round(this.currentValue);
    this.maxValue = Math.round(this.maxValue);

    this.xStart = this.strokeWidth / 2;
    this.yStart = this.radius + this.strokeWidth / 2;

    const percentage = (this.currentValue / this.maxValue) * 100;
    const degrees = (percentage / 100) * 180;
    const radians = (degrees * Math.PI) / 180;

    this.xValue = this.strokeWidth / 2 + this.radius * (1 - Math.cos(radians));
    this.yValue =
      this.radius + this.strokeWidth / 2 - this.radius * Math.sin(radians);

    this.xEnd = this.radius * 2 + this.strokeWidth / 2;
    this.yEnd = this.radius + this.strokeWidth / 2;

    this.componentContainerStyle = {
      width: `${this.radius * 2 + this.strokeWidth}px`,
      height: `${this.radius + this.strokeWidth / 2}px`,
    };
  }
}
