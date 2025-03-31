import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {

    this.state = {
      total: 0,
      donates: [],
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    
    const $heading = document.createElement('h1');
    const $sumDonat = document.createElement('span');
    
    $sumDonat.textContent = this.state.total;
    $heading.textContent = `Итого: $`;
    $heading.appendChild($sumDonat);
    this.$rootElement.appendChild($heading);
    
    this.$total = $sumDonat;
    console.log( this.$total)
    const donateForm = new Form( {onSubmit: this.onItemCreate.bind(this) } );
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List( { onDelete: this.onItemDelete.bind(this) } );
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList;
  }
  
  onItemCreate(amount) {
    const item = new ListItem({ amount, onDelete: (id, amount) => {
      this.onItemDelete(id, amount);
    }
  });
    this.state.donates.push(item);
    this.state.total += amount;
    this.$total.textContent = this.state.total; 
    this.donateList.addItem(item);
      
  }

  onItemDelete(id, amount) {
    
    this.state.donates = this.state.donates.filter(item => item.id !== id);
    
    
    this.state.total -= amount;
    this.$total.textContent = this.state.total;
    
    
    const items = this.donateList.$listContainer.children;
    console.log(this.donateList.$listContainer)
    for (let i = 0; i < items.length; i++) {
      if (Number(items[i].dataset.id) === id) {
        items[i].remove();
        break;
      }
    }
  }

}
