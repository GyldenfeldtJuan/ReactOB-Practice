import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ContactComponent = ({contacto}) => {
  return (
    <div>
        <h2>
            Nombre: {contacto.name}
        </h2>
        <h3>
            Apellido: {contacto.surname}
        </h3>
        <h4>
            Email: {contacto.email}
        </h4>
        <h5>
            Conectado: {contacto.conected ? 'Contacto En Línea' : 'Contacto No Disponible'}
        </h5>
    </div>
  )
}

ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactComponent