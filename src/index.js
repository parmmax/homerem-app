import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./components/Sidebar/Sidebar";
import Promo from "./components/Promo/Promo";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import Tariffs from "./components/Tariffs/Tariffs";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./App.css";
import './App.scss';

function App() {
    return (
        <div id="App" className="app-wrapper">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>

            <main className="page">
                <Promo/>
                <div className="content">
                    <Services/>
                    <Tariffs/>
                    <Steps/>
                    <Form/>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

