import React, { Component } from 'react'

class Empresas extends Component {

    get value() {
        return this.refs.inputEmpresas.value
    }

    set value(inputValue) {
        this.refs.inputEmpresas.value = inputValue
    }

    render() {
        return (
            <div>
                <input className='form-control' ref="inputEmpresas"
                       type="text"
                       list="empresas" defaultValue={this.props.padrao}/>
                <datalist id="empresas">
                    {this.props.options.map(
                        (opt) =>
                            <option key={opt.id} value={opt.nome}/>)}
                </datalist>
            </div>
        )
    }
}
export default Empresas