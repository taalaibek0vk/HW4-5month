import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./App";

const defaultState = {
  name: '',
  age: '',
  phone: ''
}


export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...defaultState, name: action.name, age: action.age, phone: action.phone}
    default:
      return state;
  }
}
const store = createStore(userReducer)

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);