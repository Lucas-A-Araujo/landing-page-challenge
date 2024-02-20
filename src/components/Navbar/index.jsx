import './styles.css';

export function NavBar() {
    return (
      <nav className="navbar">
        <div className="container">
          <a href="#welcome">Bem Vindo</a>
          <a href="#professionals">Profissionais</a>
          <a href="#why-choose-us">Por que nos escolher?</a>
          <a href="#our-courses">Nossos Cursos</a>
          <a href="#testimonials">Testemunhos</a>
          <a href="#prices">Preços</a>
          <a href="#subscription-form">Formulário de Assinatura</a>
        </div>
      </nav>
    );
  }