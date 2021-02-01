import React from 'react';
import {Alert, Share} from 'react-native';

import {EpisodeHeader, Separator, Text} from 'components';
import {sizes, styling} from 'styles';
import IconButton, {ButtonGroup} from 'components/Button';
import {ScrollView} from 'react-native-gesture-handler';

export function EpisodeScreen() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Episode sharing must change this text later',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        //dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: sizes.margin}}>
      <EpisodeHeader podcast="Ted Talks Daily" icon="" createdAt="1 hour ago" />
      <Text style={styling.title}>
        What are young developers into? They're all getting AWS certified
      </Text>
      <ButtonGroup duration="18min">
        <IconButton icon="share" onPress={onShare} />
      </ButtonGroup>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti
        consectetur inventore illum magni amet, deserunt sit fugit est, culpa
        saepe in natus impedit reprehenderit dolores? Tempore sint voluptatum
        dolorum.
      </Text>
      <Separator />
      <Text>People also listened to</Text>
    </ScrollView>
  );
}

export default EpisodeScreen;
