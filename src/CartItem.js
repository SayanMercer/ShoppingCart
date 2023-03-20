import React from 'react';

class CartItem extends React.Component {

    constructor() {
        super() // this is used here because the constructor need to be called inside so that is ue super
        this.state ={
            price: 999,
            title:'Mobile Phone',
            qty:1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('this', this.state)

    }

  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{this.state.title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty:{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
              alt="increase" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              onClick={this.increaseQuantity}
              />
            <img 
              alt="decrease" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png"
              />
            <img 
              alt="delete" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"/>
          </div>
        </div>
      </div>
    );
  }
}
//Object of java script
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;