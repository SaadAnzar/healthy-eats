import { Link } from 'expo-router';
import { Button, Card, Paragraph, XStack, ButtonText, YStack, Spinner } from 'tamagui';

import { Modal } from 'react-native';
import React from 'react';
import { Main } from '../tamagui.config';
import { Feather } from '@expo/vector-icons';

type ModalComponentProps = {
  modalVisible: boolean;
  isLoading: boolean;
  onCameraPress: () => void;
  onGalleryPress: () => void;
};
export default function ModalComponent({
  modalVisible,
  isLoading,
  onCameraPress,
  onGalleryPress,
}: ModalComponentProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Main justifyContent="flex-end">
        <Card size="$8" elevate height="50%" backgroundColor="#FFFFFF">
          <Link href="/home" disabled={isLoading} asChild>
            <ButtonText paddingTop="$3" paddingHorizontal="$4" size="$6" color="$blue10Light">
              Cancel
            </ButtonText>
          </Link>
          {isLoading ? (
            <YStack justifyContent="center" marginTop="$14" space>
              <Spinner size="large" color="$green10Light" />
              <Paragraph size="$8" alignSelf="center">
                Uploading Image
              </Paragraph>
            </YStack>
          ) : (
            <YStack justifyContent="center" marginTop="$14" space>
              <Paragraph alignSelf="center" size="$8">
                Choose an option
              </Paragraph>
              <XStack space="$3" marginVertical="$2" justifyContent="center">
                <Button
                  onPress={onCameraPress}
                  alignSelf="center"
                  icon={<Feather name="camera" size={20} />}
                  size="$5">
                  <ButtonText size="$6">Camera</ButtonText>
                </Button>
                <Button
                  onPress={onGalleryPress}
                  alignSelf="center"
                  icon={<Feather name="image" size={20} />}
                  size="$5">
                  <ButtonText size="$6">Gallery</ButtonText>
                </Button>
              </XStack>
            </YStack>
          )}
        </Card>
      </Main>
    </Modal>
  );
}
