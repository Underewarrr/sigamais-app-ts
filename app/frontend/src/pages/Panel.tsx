import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Header from './components/Header'
import './css/panel.css'

const Panel = () => {
  return (
      <>
    <Header />
    <div className="P_CARD">
    <Card className=''>
        <Card.Header>
            Realize Ações
        </Card.Header>
        <Card.Body>
        <Card.Text>
            Realize ações seguindo outros perfils e ganhe dinheiro.
        </Card.Text>
        <Button>
            Realize Ações
        </Button>
        </Card.Body>
    </Card>
    <Card className=''>
        <Card.Header>
            Compre Seguidores
        </Card.Header>
        <Card.Body>
            <Card.Text>
            Esta precisando de dar um boost em seu perfil?
            </Card.Text>
            <Button>
                Comprar Seguidores
            </Button>
        </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Panel