import { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button' 
import MaskInput from '../MaskInput'
import TextAreaField from '../TextAreaField'
import './Form.css'

const Form = (props) => {

    const [mail, setMail] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [subject, setSubject] = useState('');
    const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
    }

    const save = (e) => {
        e.preventDefault()
        props.registerVisitors({
            cpfcnpj: values.cpfcnpj,
            name,
            role,
            phone: values.phone,
            mail,
            subject
        }) 
        clearFields()
    }

    const clearFields = () => {
        setMail('')
        setName('')
        setRole('')
        setSubject('')
        setValues({ cpfcnpj: '', phone: '' })
    }

    return (
        <section className='form-container'>
            <form onSubmit={save}>
                <h2>Preencha os dados para realizar sua visitação</h2>
                <MaskInput
                    label="Cpf"
                    name="cpfcnpj"
                    mask="999.999.999-99"
                    value={values.cpfcnpj}
                    onChange={handleChange}
                 />
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    value={name}
                    write={value => setName(value)}/>
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    value={role}
                    write={value => setRole(value)}/>
                 <MaskInput
                    label="Telefone"
                    name="phone"
                    mask="(99)99999-9999"
                    value={values.phone}
                    onChange={handleChange}
                 />
                 <TextField 
                    label="Email" 
                    placeholder="Digite o seu email" 
                    value={mail}
                    write={value => setMail(value)}/>
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