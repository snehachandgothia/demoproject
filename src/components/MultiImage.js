import React, { useState } from 'react';
import { View, Image, Modal, StyleSheet, TouchableOpacity, Alert,ScrollView} from 'react-native';
import { ImageConstant } from '../constants/ImageConstant';
import ImagePicker from 'react-native-image-crop-picker';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';
import TextComponent from './TextComponent';
import { Colors } from '../constants/Colors';

const MultiImage = () => {
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
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={styles.picker} onPress={toggleModal} >
         <Image style={{alignSelf:"center",marginTop:30}}
         source={ImageConstant.Add}/>
    </TouchableOpacity>

    <ScrollView horizontal>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image.uri }}
            style={{ width: 75, height: 75, margin: 10 }}
          />
        ))}
      </ScrollView>

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
            <TextComponent
            size={16} weight={"600"} color={Colors.Darkgrey}>Open Camera</TextComponent>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pickMultipleImages}>
            <Image style={styles.camera} source={ImageConstant.Gallery}/>
            <TextComponent
            size={16} weight={"600"} color={Colors.Darkgrey}>Open Gallery</TextComponent>
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
    backgroundColor:Colors.Backgroundblue,
    height:"20%",
    marginTop:630
  },
  button: {
    padding: 10,
    backgroundColor: Colors.Backgroundblue,
    alignSelf: 'center',
    width: '100%',
    marginTop:10,
    marginLeft:20,
    flexDirection:"row"
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
},
picker:{
    height:75,
    width:75,
    backgroundColor:Colors.Lightblue,
    margin:10
}
});

export default MultiImage;
