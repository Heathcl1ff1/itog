import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: props.id || Date.now(),
      date: new Date(),
      amount: props.amount,
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.dataset.id = this.state.id;
    
    const text = document.createElement('span');
    text.textContent = `
      ${this.state.date.getDate()}/
      ${this.state.date.getMonth()+1}/
      ${this.state.date.getFullYear()}, 
      ${this.state.date.getHours()}:
      ${this.state.date.getMinutes()}:${this.state.date.getSeconds()} - $${this.state.amount}
    `;
    
    console.log(this.props);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', this.deleteButton.bind(this));
    this.$rootElement.appendChild(text);
    this.$rootElement.appendChild(deleteButton);
  }

  deleteButton() {
    this.props.onDelete(this.state.id, this.state.amount);
  }
}