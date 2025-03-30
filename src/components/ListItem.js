import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    
    
    const text = document.createElement('span');
    text.textContent = `
      ${this.state.date.getDate()}/
      ${this.state.date.getMonth()+1}/
      ${this.state.date.getFullYear()}, 
      ${this.state.date.getHours()}:
      ${this.state.date.getMinutes()} - $${this.state.amount}
    `;
    
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Удалить';
    
    this.$rootElement.appendChild(text);
    this.$rootElement.appendChild(deleteButton);
  }
}