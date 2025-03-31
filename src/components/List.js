import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $heading = document.createElement('h2');
    $heading.className = 'donates-container__title';
    $heading.textContent = 'Список донатов';
    
    const $block = document.createElement('div');
    $block.className = 'donates-container__donates';
    
    this.$rootElement.appendChild($heading);
    this.$rootElement.appendChild($block);

    this.$listContainer = $block;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
    
  }

  
}