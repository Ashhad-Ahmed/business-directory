import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { Colors } from './Colors';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),  // Updated linking URL
      });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);  // Retaining your original error handling
    }
  }, [startOAuthFlow]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 100,
        }}>
          <Image source={require('./../assets/images/login.png')}  
            style={{
              width: 220,
              height: 450,
              borderRadius: 20,
              borderWidth: 6,
              borderColor: '#000'
            }}
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={{ fontSize: 30, fontFamily: 'outfit-bold', textAlign: 'center' }}>
            Your Ultimate 
            <Text style={{ color: Colors.PRIMARY }}> Community Business Directory </Text>
            App
          </Text>
          <Text style={{
            fontSize: 15,
            fontFamily: 'outfit',
            textAlign: 'center',
            marginVertical: 15,
            color: Colors.GRAY
          }}>
            Find your favorite business near you and post your own business to your community
          </Text>
          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={{
              textAlign: 'center',
              color: '#fff'
            }}>
              Let's Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: '#fff', 
    padding: 20,
    marginTop: -20
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: 20
  }
});



