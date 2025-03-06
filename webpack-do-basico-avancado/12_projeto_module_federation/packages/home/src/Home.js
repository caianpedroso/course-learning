import React from 'react';
import { Card, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Card>
        <h1 className="display-3">
          Olá Module Federation
        </h1>
        <hr className="my-2" />
        <p>Este component é de outro App!</p>
        <p className="lead">
          <Button color="primary">Botão</Button>
        </p>
      </Card>
    </div>
  )
}

export default Home;