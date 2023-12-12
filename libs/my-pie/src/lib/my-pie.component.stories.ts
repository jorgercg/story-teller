import type { Meta, StoryObj } from '@storybook/angular';
import { MyPieComponent } from './my-pie.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MyPieComponent> = {
  component: MyPieComponent,
  title: 'MyPieComponent',
};
export default meta;
type Story = StoryObj<MyPieComponent>;

export const Primary: Story = {
  args: {
    colorPalette: 'primary',
    currentValue: 50,
  },
};

export const Warning: Story = {
  args: {
    colorPalette: 'warning',
    currentValue: 50,
  },
};

export const Success: Story = {
  args: {
    colorPalette: 'success',
    currentValue: 50,
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/my-pie works!/gi)).toBeTruthy();
  },
};
