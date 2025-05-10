import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
`;

const FooterTop = styled.div`
  padding: 20px;
  background: #fefff8;
`;

const ResturantInfo = styled.p`
  color: #333;
  line-height: 2;
`;

const FooterBottom = styled.div`
  padding: 10px;
  background: #a3dea2;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <FooterBottom>
        Copyright © 2025 Azeez Jayla Justin  Rights Reserved. Restaurant project
      </FooterBottom>
    </Container>
  );
}
