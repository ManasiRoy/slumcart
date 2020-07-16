import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../custom-buttons/customButtom"

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go to Checkout</CustomButton>
      </div>
    </div>
  )
}
export default CartDropdown
