import { useEffect, useState } from 'react';

import { YStack, Image, Accordion, Paragraph, Square, ScrollView, XStack, Spinner } from 'tamagui';
import { Container, Title, Subtitle } from '../tamagui.config';

import * as ImagePicker from 'expo-image-picker';

import ModalComponent from '../components/ModalComponent';
import { Feather } from '@expo/vector-icons';

type IngredientInfoType = {
  ingredient: string;
  emoji: string;
  label: string;
  description: string;
};

export default function LabelScan() {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  const [imageUploading, setImageUploading] = useState<boolean>(false);

  const [imageUri, setImageUri] = useState<string>();

  const [loading, setLoading] = useState<boolean>(false);

  const [ingredientData, setIngredientData] = useState<IngredientInfoType[]>([]);

  const pickImage = async (mode: string) => {
    try {
      let result;
      if (mode === 'gallery') {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.back,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      }
      if (!result.canceled) {
        const uri = result.assets[0].uri;
        const type = 'image/jpg';
        const name = result.assets[0].uri.split('/').pop();
        const source = { uri, type, name };

        uploadImage(source);
      }
    } catch (error: any) {
      console.log('Error picking image: ' + error.message);
      setModalVisible(false);
    }
  };

  const uploadImage = async (photo: any) => {
    setImageUploading(true);

    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'IngredientParser');
    data.append('cloud_name', 'dwupd1klr');
    await fetch('https://api.cloudinary.com/v1_1/dwupd1klr/image/upload', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => response.json())
      .then((dataR) => {
        setImageUri(dataR.url);

        setImageUploading(false);
        setModalVisible(false);
      })
      .catch((error) => {
        alert('Error uploading image');
        setImageUploading(false);
      });
  };

  const getIngredientInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://192.168.1.6:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUri }),
      });
      const json = await response.json();
      setIngredientData(json.parsed_dict);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (imageUri) {
      getIngredientInfo();
    }
  }, [imageUri]);

  return (
    <>
      {modalVisible ? (
        <Container>
          <YStack>
            <Title>Label Scan</Title>
            <Subtitle>Scan the label and get the info</Subtitle>
          </YStack>
        </Container>
      ) : (
        <ScrollView>
          <Image
            source={{
              uri: imageUri,
              height: 420,
            }}
            style={{ borderRadius: 10, margin: 24, marginBottom: 0 }}
          />
          {loading ? (
            <Container>
              <XStack justifyContent="center" space="$2">
                <Spinner color="$green10Dark" />
                <Paragraph fontSize="$6">HealthyEats is parsing ingredients</Paragraph>
              </XStack>
            </Container>
          ) : (
            <Container>
              <Subtitle alignSelf="center" marginBottom="$4">
                {ingredientData.length} Ingredients
              </Subtitle>
              {ingredientData.map((data, index) => (
                <Accordion
                  key={index}
                  overflow="hidden"
                  marginBottom="$2"
                  type="multiple"
                  borderRadius="$6">
                  <Accordion.Item value={data.ingredient}>
                    <Accordion.Trigger backgroundColor="$gray1" borderWidth="$0">
                      {({ open }: any) => (
                        <XStack flexDirection="row" justifyContent="space-between">
                          <XStack space="$2">
                            <Paragraph fontSize="$5" alignSelf="center">
                              {data.emoji}
                            </Paragraph>
                            <Paragraph fontSize="$5" maxWidth="$15">
                              {data.ingredient}
                            </Paragraph>
                          </XStack>
                          <XStack space="$3">
                            {!open && data.label === 'Unhealthy' && (
                              <Paragraph fontSize="$5" alignSelf="center">
                                👎
                              </Paragraph>
                            )}
                            <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                              <Feather name="chevron-down" size={20} />
                            </Square>
                          </XStack>
                        </XStack>
                      )}
                    </Accordion.Trigger>
                    <Accordion.Content backgroundColor="$gray1" borderWidth="$0">
                      <YStack space="$2">
                        {data.label === 'Unhealthy' && (
                          <Paragraph fontSize="$4" color="$red11Dark" space="$2">
                            👎 Unhealthy
                          </Paragraph>
                        )}
                        <Paragraph fontSize="$5">{data.description}</Paragraph>
                      </YStack>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion>
              ))}
            </Container>
          )}
        </ScrollView>
      )}
      <ModalComponent
        modalVisible={modalVisible}
        isLoading={imageUploading}
        onCameraPress={() => pickImage('camera')}
        onGalleryPress={() => pickImage('gallery')}
      />
    </>
  );
}
