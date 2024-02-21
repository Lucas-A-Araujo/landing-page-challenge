import { useState } from 'react';
import './styles.css';
import DoneSVG from '../../assets/icons/material-symbols_done';

const PricesSection = () => {
    const [plans] = useState([
        {
            id: 1,
            title: "Ciência de dados",
            price: 129.99,
            installmentPrice: 19.99,
            benefits: ["Benefício 1", "Benefício 2", "Benefício 3", "Benefício 4", "Benefício 5", "Benefício 6", "Benefício 7", "Benefício 8"],
        },
        {
            id: 2,
            title: "Engenheiaria de dados",
            price: 119.99,
            installmentPrice: 29.99,
            benefits: ["Benefício 1", "Benefício 2", "Benefício 3", "Benefício 4", "Benefício 5", "Benefício 6", "Benefício 7", "Benefício 8"],
        },
        {
            id: 3,
            title: "Analise de dados",
            price: 109.99,
            installmentPrice: 39.99,
            benefits: ["Benefício 1", "Benefício 2", "Benefício 3", "Benefício 4", "Benefício 5", "Benefício 6", "Benefício 7", "Benefício 8"],
        },
    ]);

    return (
        <div id="prices" className="prices-section">
            <h2>Preços</h2>
            <div className="price-cards">
                {plans.map(plan => (
                    <div key={plan.id} className="price-card">
                        <h3>{plan.title}</h3>
                        <p>A vista por <b>R$ {plan.price.toFixed(2).replace('.', ',')}</b></p>
                        <p>Ou 12x de <b>R$ {plan.installmentPrice.toFixed(2).replace('.', ',')}</b></p>
                        <ul>
                            {plan.benefits.map((benefit, index) => (
                                <li key={index}>
                                <DoneSVG/>
                                {benefit}
                            </li>
                            ))}
                        </ul>
                        <a className='button-price' href="#subscription-form" onClick={() => console.log(`Redirecionando para o formulário do plano ${plan.title}`)}>
                            Assinar Agora
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricesSection;