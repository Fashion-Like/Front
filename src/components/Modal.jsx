import { ContainerModal, HeadModal, BodyModal, Backdrop } from '../assets/css/styledModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ title, message, type, isOpenModal, setIsOpenModal }) => {
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
    {isOpenModal &&

      <Backdrop >
        <ContainerModal>
          <HeadModal>
            <button
              onClick={closeModal}
            >;
            <FontAwesomeIcon icon={ faTimes } />
            </button>
            <div>

              <FontAwesomeIcon
                icon={ type === 'success' ? faCheckCircle : faTimesCircle}
                size="6x"
                color={ type === 'success' ? '#1B892D' : '#E71717'}
              />

            </div>
          </HeadModal>

          <BodyModal>
            <h2> {title} </h2>
            <p> {message} </p>
            <button
              onClick={closeModal}
            >
            ENTIENDO
            </button>
          </BodyModal>
        </ContainerModal>
      </Backdrop >
    }
    </>
  );
};

export default Modal;
