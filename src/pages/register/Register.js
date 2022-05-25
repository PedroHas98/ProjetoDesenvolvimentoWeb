import React from 'react'


import { ErrorMessage, 
        Formik,
        Form, 
        Field } from 'formik'

import * as yup from 'yup'
import axios from 'axios'

import './Register.css'

const Register = ( ) => {
    const handleSubmit = values => {
        axios.post('http://localhost:3000/home', values).then(resp => console.log(resp))
    }
    const validations = yup.object().shape({

        email: yup.string().email().required(),
        password: yup.string().min(8).required()

    })
    return(
        <> 
        <main className="main"> 
        <div className="formulario"> 
            <h1>Cadastre-se</h1>
                <p>Realize o Cadastro para continuar</p>
                <Formik initialValues={{}} 
                        onSubmit={handleSubmit} 
                        validationSchema={validations}>
                    <Form className="Register"> 
                        <div className="Register-Group"> 
                            <Field 
                                name="email" 
                                className="Register-Field"
                                placeholder="Insira o seu E-mail"
                            /> 
                            <ErrorMessage 
                                component="span" 
                                name="email" 
                                className="Register-Error"
                            />
                        </div>
                        <div className="Register-Group"> 
                            <Field 
                                name="password" 
                                className="Register-Field"
                                placeholder="Insira a sua senha"
                            /> 
                            <ErrorMessage 
                                component="span" 
                                name="password" 
                                className="Register-Error"
                            />
                        </div>    
                        <div className="Register-Group"> 
                        <label className="info">Minino de 8 letras, insira no mínimo 1 número, e um caractere especial.</label>

                            <Field 
                                name="password" 
                                className="Register-Field"
                                placeholder="Confirme a sua senha"
                            /> 
                            <ErrorMessage 
                                component="span" 
                                name="password" 
                                className="Register-Error"
                            />
                        </div>    
                        <div className="lembre">
                            <input type="checkbox" id="lembrar" name="lembrar" checked/>
                                <label className="lembrar">Li e aceito os <a href=""> Termos e condições.</a></label>
                        </div>
                        
                            <button className="Register-btn" type="submit"> Realizar Cadastro </button>

                        <div className="rodape"> 
                            <p>ou</p>
                            <span> já possui cadastro?<a href=""> Faça login.</a></span> 
                        </div>
                    </Form>
                </Formik>
        </div>
        <div className="logo"> 
        
        </div>
        </main>   
        </>

    )
}


export default Register