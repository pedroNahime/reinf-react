import React, {Component} from 'react'
import Title from './Form/Title'
import ModalNf from './Form/ModalNF'
import Empresas from './Form/Empresas'
import Responsaveis from './Form/Responsaveis'

const empresas = [
    {
        nome: 'empresa Amvei',
        id: '1'
    },
    {
        nome: 'empresa Ulbuipu',
        id: '2'
    },
    {
        nome: 'empresa Belror',
        id: '3'
    },
    {
        nome: 'empresa Saonen',
        id: '4'
    },
    {
        nome: 'empresa Loren',
        id: '5'
    },
    {
        nome: 'empresa Inweu',
        id: '6'
    }
];
const responsaveis = [
    {
        nome: 'Responsavel 1',
        id: '1'
    },
    {
        nome: 'Responsavel 2',
        id: '2'
    },
    {
        nome: 'Responsavel 3',
        id: '3'
    },
    {
        nome: 'Responsavel 4',
        id: '4'
    }
]

const notas = [
    {
        nota: '0001',
        data: '2018-05',
        remetente: 'empresa Amvei ',
        destinataria: 'empresa Ulbuipu ',
        valor: 100,
        id: 1
    },
    {
        nota: '0002',
        data: '2018-01',
        remetente: 'empresa Belror ',
        destinataria: 'empresa Saonen ',
        valor: '163',
        id: 2
    },
    {
        nota: '0003',
        data: '2018-05',
        remetente: 'empresa Loren ',
        destinataria: 'empresa Inweu ',
        valor: 150,
        id: 3
    },
]
let _empresa, _date, _responsavel, _certificado;

class Form extends Component {
    constructor(props){
        super(props)

        this.escolhaNF = this.escolhaNF.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            nf: '',
            escolhido:false
        }
    }

    submit(e) {
        e.preventDefault();
        if (_empresa.value !== '' || _date.value !== '' || _responsavel.value !== '') {
            this.props.enviarReinf({
                empresa: _empresa.value,
                date: _date.value,
                responsavel: _responsavel.value,
                certificado: _certificado.value,
                nf: this.state.nf
            });
            _empresa.value = '';
            _date.value = '';
            _responsavel.value = '';
            _certificado.value = '';
        }
    };

    updateForm() {
        this.forceUpdate()
    }

    escolhaNF(item){
        this.setState({nf: item, escolhido: true});
    };

    editarNF(item){
        notas.forEach((nota) => {
            if (nota.id === item.id) {
                console.log(nota);
                if (item.nota !== '') {
                    nota.nota = item.nota;
                }
                if (item.remetente !== '') {
                    nota.remetente = item.remetente;
                }
                if (item.destinataria !== '') {
                    nota.destinataria = item.destinataria;
                }
                if (item.valor !== '') {
                    nota.valor = item.valor;
                }
            }
        });
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="section-title">
                    <Title texto='Reinf'/>
                </div>
                <hr/>
                <div className='intem-wrapped'>
                    <div className="row">
                        <div className="col-md-5 col-xs-12 pull-left form-group">
                            <ModalNf updateForm={this.updateForm} empresasInicial={empresas} escolhaNF={this.escolhaNF} responsaveisInicial={responsaveis}
                                     editarNf={this.editarNF}
                                     notas={notas} title='Selecione a NF'/>
                        </div>
                        {this.state.escolhido ?
                            <div className="col-md-5 col-xs-12 pull-right form-group">
                                <label htmlFor="nfSelecionada">NF Selecionada</label>
                                <input id="nfSelecionada" value={this.state.nf.nota} className='form-control' readOnly
                                       type="text"/>
                            </div>: null
                        }
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-5 col-xs-12 pull-left form-group">
                            <label>Escolha a Empresa</label>
                            <Empresas padrao='' options={empresas}
                                      ref={input => _empresa = input}/>
                        </div>
                        <div className="col-md-5 col-xs-12 pull-right form-group">
                            <label htmlFor="date">Escolha um mês </label>
                            <input id="date" className='form-control' type="month"
                                   ref={input => _date = input}/>
                        </div>
                        <div className="col-md-5 col-xs-12 pull-left form-group">
                            <label>Escolha o Responsável</label>
                            <Responsaveis padrao='' options={responsaveis}
                                          ref={input => _responsavel = input}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6 col-xs-12 pull-left form-group">
                            <label>Importar Certificado</label>
                            <input type="file" ref={input => _certificado = input}/>
                        </div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='enviar-form text-center'>
                            <button className='btn btn-green form-control'>Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
};
export default Form