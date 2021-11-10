import { Card, Button } from "react-bootstrap";
import './App.css';

export default function CardHospedagem() {
  return (
    <Card border="danger" style={{width: "18rem"}}>
      <Card.Img
        variant="top"
        src="https://vidacigana.com/wp-content/uploads/2018/06/como-funciona-airbnb-1.jpg"
      />
      <Card.Body>
        <Card.Title>Título da Hospedagem</Card.Title>
        <Card.Text>Descrição da hospedagem</Card.Text>
        <Card.Subtitle className="text-center">Porto Alegre - RS</Card.Subtitle>
        <Card.Title className="text-center">R$ 159/noite</Card.Title>
        <Button className="botao-centralizado" variant="primary" >Reservar</Button>
      </Card.Body>
    </Card>
  );
}
