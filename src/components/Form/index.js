import { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button' 
import MaskInput from '../MaskInput'
import './Form.css'
import TextAreaField from '../TextAreaField'

const Form = (props) => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [office, setOffice] = useState('')
    const [subject, setSubject] = useState('');
    const [values, setValues] = useState({});

    console.log(values);

    function handleChange(event) {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
    }

    const save = (e) => {
        e.preventDefault()
        props.registerVisitors({
            email,
            firstName,
            office,
            values
        })
    }

    return (
        <section className='form-container'>
            <form onSubmit={save}>
                <h2>Preencha os dados para realizar sua visitação</h2>
                <MaskInput
                    label="Cpf"
                    name="cpf"
                    mask="999.999.999-99"
                    value={values.cpf}
                    onChange={handleChange}
                 />
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    value={firstName}
                    write={value => setFirstName(value)}/>
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    value={office}
                    write={value => setOffice(value)}/>
                 <MaskInput
                    label="Telefone"
                    name="mobile"
                    mask="(99)99999-9999"
                    value={values.mobile}
                    onChange={handleChange}
                 />
                 <TextField 
                    label="Email" 
                    placeholder="Digite o seu email" 
                    value={email}
                    write={value => setEmail(value)}/>
                <TextAreaField 
                    label="Assunto"
                    placeholder="Digite o assunto"
                    value={subject}
                    write={value => setSubject(value)}
                    rows={4}
                    cols={50}/>
                <Button>
                    Registre-se
                </Button>
            </form>
        </section>
    )
}

export default Form