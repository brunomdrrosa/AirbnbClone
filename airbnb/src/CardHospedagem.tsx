import { Card, Button } from "react-bootstrap";
import "./App.css";

export default function CardHospedagem() {
  return (
    <div className="main">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://vidacigana.com/wp-content/uploads/2018/06/como-funciona-airbnb-1.jpg" />
        <Card.Body>
          <Card.Title>Título da hospedagem</Card.Title>
          <Card.Text>Descrição da hospedagem</Card.Text>
          <Card.Subtitle className="text-center">
            Porto Alegre - RS
          </Card.Subtitle>
          <Card.Title className="text-center">R$ 159/noite</Card.Title>
          <Button variant="primary">Reservar agora</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

{/* <h1 style={{ padding: "1rem" }}>Hospedagens</h1>
<Stack direction="horizontal" gap={4}>
  <CardHospedagem />
  <CardHospedagem />
  <CardHospedagem />
  <CardHospedagem />
  <CardHospedagem />
</Stack> */}