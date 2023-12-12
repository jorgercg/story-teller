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
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/my-pie works!/gi)).toBeTruthy();
  },
};
