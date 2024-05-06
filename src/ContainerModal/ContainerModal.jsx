import Modal from '../Modal/Modal';
import Button from '../ButtonModal/ButtonModal';
import React from 'react';

const ContainerModal = ({TextBtn, TextModal}) => {
    const [modal, setModal] = React.useState(true)
    return(
        <>
        <Modal text={TextModal} modal={modal}/>
        </>     
    )
}

export default ContainerModal;