import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Image,
  } from 'react-native';
  import React from 'react';
  import {COLORS, images, icons} from '../../constants';
  
  const ForgotPassword = ({navigation}) => {
    function renderHeader() {
      return (
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 5,
            right: 12,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={{fontSize:17, color:COLORS.white, fontFamily: 'IBMPlexMono_700Bold',}}>Forgot Password</Text>
            </TouchableOpacity>
         
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}></View>
          </View>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <View style={[{flex: 1}, styles.elementsContainer]}>
          <View style={{flex: 1}}>{renderHeader()}</View>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              
            }}>
            <SafeAreaView style={{marginTop:'5%'}}>
              <Text style={{marginBottom: '3%', color: '#FFFFFF',fontFamily: 'IBMPlexMono_700Bold',}}>
              Enter your email or phone number to send a password reset link:
              </Text>
              <TextInput
                style={styles.input1}
                onChangeText=""
                placeholder="Phone or email"
              />
         
  
              <View>
                <View
                  style={{
                    width: 350,
                    backgroundColor: COLORS.white,
                    padding: '4%',
                    borderRadius: 4,
                    marginTop: '5%',
                  }}>
                  <TouchableOpacity onPress={()=> navigation.navigate('ResetPassword')}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: COLORS.black,
                        fontFamily: 'IBMPlexMono_700Bold',
                      }}>
                      Send password reset link
                    </Text>
                  </TouchableOpacity>
                </View>
          
              </View>
            </SafeAreaView>
          </View>
        </View>
      </View>
    );
  };
  
  export default ForgotPassword;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.blue,
    },
    text: {
      color: COLORS.white,
    },
    title: {
      fontSize: 35,
      color: COLORS.white,
    },
    headerStyle: {
      fontSize: 36,
      textAlign: 'center',
      fontWeight: '100',
      marginBottom: 24,
    },
    elementsContainer: {
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 24,
    },
    input1: {
      height: 50,
      width: 350,
      borderWidth: 1,
      borderColor: '#EEEEEE',
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius:5
    },
    input2: {
      height: 50,
      width: 350,
      borderWidth: 1,
      borderColor: '#EEEEEE',
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
    },
  });
  