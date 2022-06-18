import React, {useState} from 'react'
import {IconButton} from '@material-ui/core'
import {ShoppingCartOutlined} from '@material-ui/icons'

const Description = () => {
  const [count, setCount] = useState(0);
  const onAddClick = () =>{
    setCount(count + 1);
  }
  const onSubClick = () => {
    if (count > 0){
      setCount(count - 1);
    }
  }

	return (
		<div>
			<h6>sneaker company</h6>
			<h1>fall limited edition sneakers</h1>
			<p>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they'll withstand everything the
				weathr can offer.
			</p>
      <div>
        <p>$125.00</p>
        <p>50%</p>
      </div>
      <p>
        <strike>$250.00</strike>
      </p>
      <div className='counter' >
        <button onOnclick={onSubClick} disabled={count === 0} >
          -
        </button>
        <span>{count}</span><button onClick = {onAddClick}>+</button>
      </div>
      <div className='add-to-cart' >
        <IconButton>
          <ShoppingCartOutlined/>
        </IconButton>
        <span>Add to cart</span>
      </div>
		</div>
	);
};

export default Description;
