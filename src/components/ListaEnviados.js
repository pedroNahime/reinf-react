import {Enviados} from './Enviados'
import React from 'react'

export const ListaEnviados = ({enviados}) => {
    return (
        <div>
            {enviados.map((enviado, i) =>
                <Enviados key={i}
                          {...enviado}/>
            )}
        </div>
    )
};













