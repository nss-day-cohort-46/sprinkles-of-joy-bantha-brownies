console.log("Welcome to Sprinkles of Joy!")

import "./customers/RegisterForm.js"
import "./orders/OpenCart.js"
import "./orders/OrderList.js"
import "./reviews/ReviewsList.js"
import { LogoutNav } from "./customers/CustomerLogoutNav.js"
import { CustomerNav } from "./customers/CustomerNav.js"
import { CategorySelect } from "./categories/CategorySelect.js"
import { LoginForm } from "./customers/LoginForm.js"
import { ProductList } from "./products/ProductList.js"
import { ContactForm } from './customers/ContactForm.js'
LoginForm()
CustomerNav()
LogoutNav()
CategorySelect()
ProductList(0)
