import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {welcomeScreenData} from '../../assets/data/data';
import {images} from '../../assets';
import Button from '../../Components/Button';

const {welcome} = images;

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{flex: 1, justifyContent: 'space-around', marginVertical: 16}}>
        {/** ====================== Image =================================== */}
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={welcome} style={{width: 324, height: 324}} />
        </View>

        {/** ====================== Welcome Text ============================= */}
        <View style={{alignItems: 'center', marginTop: -100}}>
          <Text
            style={{
              color: '#4A4A4A',
              fontSize: 20,
              textAlign: 'center',
              fontFamily: 'Exo-SemiBold',
            }}>
            {welcomeScreenData.title}
          </Text>
          <Text
            style={{
              color: '#4A4A4A',
              fontSize: 18,
              textAlign: 'center',
              fontFamily: 'Exo-Regular',
              marginTop: 8,
            }}>
            {welcomeScreenData.subtitle}
          </Text>
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText="Sign Up"
          onPrimaryBtnPress={() => navigation.navigate('SignUp')}
          secondaryBtnText2="Skip"
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
}
