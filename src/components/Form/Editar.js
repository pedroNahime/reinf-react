import React, {Component} from 'react'
import Empresas from './Empresas'

let _remetente, _destinataria, _numeroNota, _valor

class Editar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            empresas: this.props.empresas,
            responsaveis: this.props.responsaveis,
            idNota:this.props.notaEdicao.id
        };
    }

    enviaEdicao = (e)=>{
        e.preventDefault();
        this.props.editarNf({
            nota: _numeroNota.value,
            remetente: _remetente.value,
            destinataria: _destinataria.value,
            valor: _valor.value,
            id: this.state.idNota
        })
        this.props.updateParent()
    };
    render() {
        return (
            <div>
                <form onSubmit={this.enviaEdicao}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label>Empresa Remetente</label>
                                <Empresas ref={input => _remetente = input} padrao={this.props.notaEdicao.remetente}
                                          options={this.state.empresas}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label>Empresa Destinatária</label>
                                <Empresas ref={input => _destinataria = input} padrao={this.props.notaEdicao.destinataria} options={this.state.empresas}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label htmlFor="editarNumeroNota">Editar Número da Nota</label>
                                <input ref={input => _numeroNota = input} type="number" className='form-control'
                                       defaultValue={this.props.notaEdicao.nota}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="editarValorNota">Editar Valor da Nota</label>
                                <input ref={input => _valor = input} type="number" className='form-control'
                                       defaultValue={this.props.notaEdicao.valor}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" simple-btn text-center">
                                <button className="btn btn-green"> Salvar Edição</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Editar