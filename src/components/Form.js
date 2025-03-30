import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    
    this.state = {
      amount: '',
    }

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $label = document.createElement('label');
    const $input = document.createElement('input');
    const $button = document.createElement('button');
    $label.className = 'donate-form__input-label';
    $label.textContent = 'Введите сумму в $';
    $input.className = 'donate-form__donate-input';
    $input.name = 'amount';
    $input.type = 'number';
    $input.max = '100';
    $input.min = '1';
    $input.setAttribute('required', '');
    $button.className = 'donate-form__submit-button';
    $button.textContent = 'Задонатить';
    $button.setAttribute('disabled', '')
    $button.type = 'submit';
    this.$rootElement.appendChild($label);
    $label.appendChild($input);
    this.$rootElement.appendChild($button);

    this.$input = $input;
    this.$button = $button;

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));

  }

  get isValid() {
    if(this.state.amount >= 1 && this.state.amount <= 100) {
      return true;
    } else return false;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    if(!this.isValid) {
      this.$button.disabled = !this.isValid;
    } else {
      this.$button.removeAttribute('disabled')
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if(this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.$input.value = '';
    } 
      

  }
}
