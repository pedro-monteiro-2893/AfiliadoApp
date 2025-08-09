import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AWINLOGO from '../assets/awinlogo.webp';
import SHOPEELOGO from '../assets/shopeelogo.png';
import PROMOAWIN from '../assets/promoawin.png';
import PROMOSHOPEE from '../assets/promoshopee.png'
import { PROGRAMAS_AWIN, PROGRAMAS_SHOPEE, PROMOCOES_E_CUPONS_AWIN, PROMOCOES_E_CUPONS_SHOPEE } from "../util/rotas";

const HomePage = () => {

  const botoes = [
    {
      titulo: "Programas Awin",
      imagem: AWINLOGO,
      link: PROGRAMAS_AWIN
    },
    {
      titulo: "Programas Shopee",
      imagem: SHOPEELOGO,
      link: PROGRAMAS_SHOPEE
    },
    {
      titulo: "Promoções e Cupons AWIN",
      imagem: PROMOAWIN,
      link: PROMOCOES_E_CUPONS_AWIN
    },
    {
      titulo: "Promoções e Cupons SHOPEE",
      imagem: PROMOSHOPEE,
      link: PROMOCOES_E_CUPONS_SHOPEE
    }
  ];

    return (
        <Container className="py-4">
      <Row className="justify-content-center g-4">
        {botoes.map((botao, index) => (
          <Col key={index} xs={6} md={3} className="text-center">
            <Button
              as={Link as any}
              to={botao.link}
              variant="light"
              className="w-100 p-3 border rounded shadow-sm d-flex flex-column align-items-center"
            >
              <img
                src={botao.imagem}
                alt={botao.titulo}
                style={{ width: "120px", maxHeight: "auto", marginBottom: "10px" }}
              />
              <span>{botao.titulo}</span>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
    
};

export default HomePage;