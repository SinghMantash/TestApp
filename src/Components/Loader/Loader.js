import React from 'react';
import { UIActivityIndicator } from "react-native-indicators";
import Modal from 'react-native-modal';
import colors from '../../styles/colors';


const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal isVisible={isLoading}
            useNativeDriver={true} 
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
            backdropOpacity={0.3}
            >
                <UIActivityIndicator size={50} color={colors.secondaryColor} />
            </Modal>
        );
    }
    return null;
};

export default Loader;
