import React, { useState } from 'react';
import { View, Image, Modal, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { ImageConstant } from '../constants/ImageConstant';
import ImagePicker from 'react-native-image-crop-picker';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';
import TextComponent from './TextComponent';

const Imagepicker = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const pickMultipleImages = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then((selectedImages) => {
        const imageUris = selectedImages.map((img) => ({ uri: img.path }));
        setImages(imageUris);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const requestCameraPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
      );

      if (result === RESULTS.GRANTED) {
        pickFromCamera(); 
      } else {
        Alert.alert('Permission Denied', 'Camera permission is required to take photos.');
      }
    } catch (err) {
      console.log('Camera permission error:', err);
    }
  };

  const pickFromCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      cropping: true,
    })
      .then((image) => {
        setImages([...images, { uri: image.path }]);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <TouchableOpacity style={styles.circle} onPress={toggleModal}>
        {images.length > 0 ? (
          <Image style={styles.image} source={{ uri: images[0].uri }} />
        ) : (
          <Image style={styles.icon} source={ImageConstant.Profile} />
        )}
      </TouchableOpacity>

      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
            <TouchableOpacity onPress={toggleModal} style={{borderBottomWidth:1,}}>
            <Image style={styles.cancel}
            source={ImageConstant.Cancel}/>
            </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={requestCameraPermission}>
            <Image  style={styles.camera} source={ImageConstant.Camera}/> 
            <TextComponent size={16} weight={"600"} color={"#3C3C3C"}>
              Open Camera</TextComponent>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pickMultipleImages}>
            <Image style={styles.camera} source={ImageConstant.Gallery}/>
            <TextComponent
            size={16} weight={"600"} color={"#3C3C3C"}>Open Gallery</TextComponent>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'transparent',
    width:"100%",
    backgroundColor:"#C4E1FD",
    height:"20%",
    marginTop:630
  },
  button: {
    padding: 10,
    backgroundColor: '#C4E1FD',
    alignSelf: 'center',
    width: '100%',
    marginTop:10,
    marginLeft:20,
    flexDirection:"row"
  },
  circle: {
    height: 80,
    width: 80,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 50,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
  },
  icon:{
    height:28,
    width:26,
    alignSelf:"center",
    marginTop:25
  },
  modal:{
    width:"100%"
  },
  cancel:{
    marginTop:10,
    height:25,
    width:25,
marginLeft:330,
marginBottom:5
},
camera:{
    height:25,
    width:25,
    marginRight:10
}
});

export default Imagepicker;
