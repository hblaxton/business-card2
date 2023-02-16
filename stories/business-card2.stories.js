import { html } from 'lit';
import '../src/business-card2.js';

export default {
  title: 'BusinessCard2',
  component: 'business-card2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <business-card2
      style="--business-card2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </business-card2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
