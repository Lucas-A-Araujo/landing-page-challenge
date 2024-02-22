import FormImg from '../../assets/form_img.jpg';
import { useState } from 'react';
import './styles.css';

const SubscriptionFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        coupon: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Aqui você pode enviar os dados para onde desejar
    };

    return (
        <div id="subscription-form" className="subscription-form-section">
            <div className="form-container">
                <h2>Inscreva-se Agora</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Celular:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course">Curso:</label>
                        <select id="course" name="course" value={formData.course} onChange={handleChange} required>
                            <option value="">Selecione o Curso</option>
                            <option value="curso1">Curso 1</option>
                            <option value="curso2">Curso 2</option>
                            <option value="curso3">Curso 3</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="coupon">Cupom:</label>
                        <input type="text" id="coupon" name="coupon" value={formData.coupon} onChange={handleChange} />
                    </div>
                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
            <div className="form-image">
                <img src={FormImg} alt="Imagem" />
            </div>
        </div>
    );
};

export default SubscriptionFormSection;