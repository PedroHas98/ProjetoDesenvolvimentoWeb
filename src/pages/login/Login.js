import React from 'react'


import { ErrorMessage, 
        Formik,
        Form, 
        Field } from 'formik'

import * as yup from 'yup'
import axios from 'axios'

import './Login.css'

const Login = ( ) => {
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
            <h1>Login</h1>
                <p>Realize o login para continuar</p>
                <Formik initialValues={{}} 
                        onSubmit={handleSubmit} 
                        validationSchema={validations}>
                    <Form className="Login"> 
                        <div className="Login-Group"> 
                            <Field 
                                name="email" 
                                className="Login-Field"
                                placeholder="Insira o seu E-mail."
                            /> 
                            <ErrorMessage 
                                component="span" 
                                name="email" 
                                className="Login-Error"
                            />
                        </div>
                        <div className="Login-Group"> 
                            <Field 
                                name="password" 
                                className="Login-Field"
                                placeholder="Insira a sua senha."
                            /> 
                            <ErrorMessage 
                                component="span" 
                                name="password" 
                                className="Login-Error"
                            />
                        <div className="lembre">
                            <input type="checkbox" id="lembrar" name="lembrar" checked/>
                                <label className="lembrar">Lembre de mim</label>
                        </div>
                        </div>
                            <button className="Login-btn" type="submit"> Login 
                        </button>

                        <div className="rodape"> 
                            <a href=""> Esqueceu a sua Senha? </a>
                            <p>ou</p>
                            <span> Não possui uma conta?<a href=""> Cadastre-se!</a></span> 
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


export default Login