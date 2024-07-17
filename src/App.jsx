import "./App.css";
import Form from "./Components/Form/Login_Form";
import SignUpForm from "./Components/Form/SignUpForm";
import Header from "./Components/header/Header";

function App() {
  return (
    <div className="main_container bg-[#D2E6FF]">
      <Header />
      <div className=" container">
        {/* <Form /> */}
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
