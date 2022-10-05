import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'
import ContactComponent from '../pure/contactstate'

const ContactFather = () => {

    const defaultContact = new Contacto('Pedro', 'Juarez', 'pJuarez@hotmail.com', true)
    
    return (
        <div>
            <div>
                <h1>Perfil de contacto</h1>
            </div>
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>
    )
}


export default ContactFather