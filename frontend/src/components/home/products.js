import axios from 'axios'
import { Container, Pagination, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Prod from './product'
const api = axios.create({
    baseURL:"http://localhost:4000/api"
})

function Products() {
    const [listProd, setListProd] = useState([])
    const [numPage, setNumPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    
      useEffect(()=>{
        ///------GetAllProd-------
    const allProducts = async(req,res)=>{
        api.get('/products?page='+numPage+'&limit=5')
        .then(rep=>{
            console.log(rep.data.produits)
            setListProd(rep.data.produits)
            setTotalPages(rep.data.totalPages)

            
        })
    }
        allProducts()
      },[numPage])
      //--------------Pagination-----------
      let items = [];
      for (let number = 1; number <= totalPages; numPage) {
        items.push(
          <Pagination.Item onClick={()=>setNumPage(number)} key={number} active={number === numPage}>
            {number}
          </Pagination.Item>,
        );
      }

      return (
        <Container>
        <h2 className='text-danger'>Produits</h2>
        <table className='table table-striped'>
            <thead>
                <tr>
                <th>Libele</th>
                <th>Catégorie</th>
                <th>Prix</th>
                </tr>
            </thead>
            <tbody>
            {listProd.map(p =><Prod libele={p.libele} cat={p.categorie} prix={p.prix} key={p._id}/>)}
           </tbody>
        </table>

        <Row>
         <Col className='md-6 offset-3'>
             <Pagination>{items}</Pagination>   
          </Col>
        </Row>
    
    </Container>   
    )   
}

export default Products