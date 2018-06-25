import React from 'react'
import PropTypes from 'prop-types'

export const Enviados = (props) => (
            <div className="lista-enviados">
                <div className='row'>
                    <div className='form-group intens-envidos'>
                        <div className='col-md-5 titulo-lista-enviados-item'>
                            <p>Empresa:</p>
                        </div>
                        <div className='col-md-6 pull-left'>
                            <p>{props.empresa}</p>
                        </div>
                    </div>
                </div>
                <div className='hr-lista'>
                    <hr className='hr-interno'/>
                </div>
                <div className='row'>
                    <div className='form-group intens-envidos'>
                        <div className='col-md-5 titulo-lista-enviados-item'>
                            <p>Data:</p>
                        </div>
                        <div className='col-md-6 pull-left'>
                            <p>{props.date}</p>
                        </div>
                    </div>
                </div>
                <div className='hr-lista'>
                    <hr className='hr-interno'/>
                </div>
                <div className='row'>
                    <div className='form-group intens-envidos'>
                        <div className='col-md-5 titulo-lista-enviados-item'>
                            <p>Responsavel:</p>
                        </div>
                        <div className='col-md-6 pull-left'>
                            <p>{props.responsavel}</p>
                        </div>
                    </div>
                </div>
                <div className='hr-lista'>
                    <hr className='hr-interno'/>
                </div>
                <div className='row'>
                    <div className='form-group intens-envidos'>
                        <div className='col-md-5 titulo-lista-enviados-item'>
                            <p>Nota:</p>
                        </div>
                        <div className='col-md-6 pull-left'>
                            <p>{props.nf.nota}</p>
                        </div>
                    </div>
                </div>
            </div>
);

Enviados.propTypes = {
    empresa: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsavel: PropTypes.string.isRequired
}


