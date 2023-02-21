import { useContext } from "react"
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { AuthenticateContext } from './AuthContext'
import { useNavigate } from "react-router-dom"
const api = axios.create({
    baseURL:"http://localhost:4000/api"
})
function Auth() {
        const {register, handleSubmit} =useForm()
        const [authInfo, setAuthInfo] = useContext(AuthenticateContext)
        const Navigate = useNavigate()
        const submitFormAuth = (data)=>{
        api.post('/login',{
            "email":data.email,
            "password":data.password
        })
        .then(rep=>{
            console.log(rep.data)
            setAuthInfo(()=>({token:'',isAuthenticated:true}))
            Navigate('/manageproducts')
        })
}
    return (
        <Container>
            <h1 className='text-danger'>Authentification</h1>
            <form onSubmit={handleSubmit(submitFormAuth)}>
                <div className='form-group'>
                    <label>Email</label>
                    <input {...register('email')} type="email" className="form-control" />
                </div>
                <div className='form-group'>
                    <label>Mot de passe</label>
                    <input {...register('pwd')} type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Entrer</button>
            </form>
        </Container>
        
    )
}

export default Auth