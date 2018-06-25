import React, {Component} from "react";


class Responsaveis extends Component {
    get value() {
        return this.refs.inputResponsaveis.value
    }

    set value(inputValue) {
        this.refs.inputResponsaveis.value = inputValue
    }
    render() {
        return (
            <div>
                <input className='form-control' ref="inputResponsaveis"
                       type="text"
                       list="responsaveis"/>
                <datalist id="responsaveis">
                    {this.props.options.map(
                        (opt) =>
                            <option value={opt.nome} key={opt.id}/>)}
                </datalist>
            </div>
        )
    }
}

export default Responsaveis