import React, { Component } from 'react'
import { ListaEnviados } from './ListaEnviados'
import Form from './Form'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FormulariosEnviados: []
        };
        this.addReinf = this.addReinf.bind(this)
    }

    addReinf(novoReinf) {
        console.log(novoReinf);
        this.setState({
            FormulariosEnviados: [
                ...this.state.FormulariosEnviados,
                novoReinf
            ]
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row wrap box-shadow form">
                    <div className="col-md-9 form-wrapper">
                        <Form enviarReinf={this.addReinf}/>
                    </div>
                    <div className="col-md-3 limite-historico">
                        <h2>Histórico de Reinf's</h2>
                        <hr/>
                        <ListaEnviados enviados={this.state.FormulariosEnviados}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App

