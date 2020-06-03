import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um Erro</strong>
          <p>Não foi possivel fazer o login</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um Erro</strong>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast type="error" hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um Erro</strong>
          <p>Não foi possivel fazer o login</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
