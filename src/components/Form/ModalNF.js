import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import Editar from './Editar'

class ModalNF extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.updateTabela = this.updateTabela.bind(this);

        this.state = {
            show: false,
            initialItems: this.props.notas,
            items: [],
            editar: false,
            notaEdicao: '',
            selecionado:''
        };

        this.filterListEmpresaRemetente = (event) => {
            let updatedList = this.state.initialItems;
            updatedList = updatedList.filter(function (item) {
                return item.remetente.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: updatedList});
        };
        this.filterListEmpresaDestinataria = (event) => {
            let updatedList = this.state.initialItems;
            updatedList = updatedList.filter(function (item) {
                return item.destinataria.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: updatedList});
        };
        this.filterListdata = (event) => {
            let updatedList = this.state.initialItems;
            updatedList = updatedList.filter(function (item) {
                return item.data.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: updatedList});
        };
        this.limpaFiltros = () => {
            document.getElementById('filtraEmpresaRemetente').value = ''
            document.getElementById('filtraEmpresaDestinataria').value = ''
            document.getElementById('filtraData').value = ''
            this.setState({items: this.state.initialItems});
        }
    }

    updateTabela() {
        this.forceUpdate()
        this.props.updateForm()
    }
    componentWillMount() {
        this.setState({items: this.state.initialItems})
    }

    handleClose() {
        this.setState({show: false, editar: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    edicaoDeNF(nota) {
        this.setState({notaEdicao: nota, editar: true});
    }
    selecionarNF(nota){
        this.props.escolhaNF(nota)
        this.setState({selecionado: nota.id})
    }

    render() {
        return (
            <div>
                <div className='simple-btn modal-button'>
                    <button className='btn btn-blue form-control' onClick={this.handleShow}>
                        {this.props.title}
                    </button>
                </div>
                <Modal bsSize="large" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Pesquisa de Nota Fiscal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='col-lg-4'>
                                    <div className='form-group'>
                                        <label htmlFor="filtraEmpresaRemetente">Filtrar Por Empresa Remetente</label>
                                        <input type="text" id='filtraEmpresaRemetente' className='form-control'
                                               onChange={this.filterListEmpresaRemetente}/>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='form-group'>
                                        <label htmlFor="filtraEmpresaDestinataria">Filtrar Por Empresa
                                            Destinatária:</label>
                                        <input type="text" id='filtraEmpresaDestinataria' className='form-control'
                                               onChange={this.filterListEmpresaDestinataria}/>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='form-group'>
                                        <label htmlFor="filtraData">Filtrar Por data</label>
                                        <input type="month" id='filtraData' className='form-control'
                                               onChange={this.filterListdata}/>
                                    </div>
                                </div>
                                <div className='col-lg-12 text-center'>
                                    <div className='form-group'>
                                        <button id='btnLimpaPesquisa' onClick={this.limpaFiltros}
                                                className=' btn btn-red'>Limpa
                                            Pesquisa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row table-form'>
                            <table className='table table-bordered table-hover table-responsive'>
                                <thead>
                                <tr>
                                    <th className='text-center'>
                                        Nota
                                    </th>
                                    <th className='text-center'>
                                        Data
                                    </th>
                                    <th className='text-center'>
                                        Empresa Remetente
                                    </th>
                                    <th className='text-center'>
                                        Empresa Destinatária
                                    </th>
                                    <th className='text-center'>
                                        Valor da Nota
                                    </th>
                                    <th className='text-center'>

                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.items.map(
                                    (nota) =>
                                        <tr className={this.state.selecionado === nota.id? 'selecionado-table': null} key={nota.id}>
                                            <td className='text-center'> {nota.nota}</td>
                                            <td className='text-center'> {nota.data}</td>
                                            <td className='text-center'> {nota.remetente}</td>
                                            <td className='text-center'> {nota.destinataria}</td>
                                            <td className='text-center'> R${nota.valor}</td>
                                            <td className='text-center'>
                                                <button className='btn btn-yellow btn-table'
                                                        onClick={() => this.edicaoDeNF(nota)}>Editar
                                                </button>
                                                <button onClick={() => this.selecionarNF(nota)} className='btn btn-green btn-table'>
                                                    Selecionar
                                                </button>
                                            </td>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            {this.state.editar ?
                                <Editar updateParent={this.updateTabela} empresas={this.props.empresasInicial}
                                        editarNf={this.props.editarNf} responsaveis={this.props.responsaveisInicial}
                                        notaEdicao={this.state.notaEdicao}/> : null}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Fechar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalNF