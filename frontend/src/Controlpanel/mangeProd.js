import React, { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AuthenticateContext } from "./AuthContext"

function ManageProd(){
        const [,setAuthInfo] = useContext(AuthenticateContext)
    return(
        <Container>
            <Row>
                <Col md={10}>Gestion des Produits</Col>
                <Col md={2}>
                    <button onClick={()=>setAuthInfo(()=>(
                        {token:'',isAuthenticated:false}
                    ))} className="btn btn-danger">Logout</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ManageProd