import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'

export default function Screen02({navigation}) {
  const [image, setImage] = useState('phone_blue');
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Image source={require(`../assets/${image}.png`)} style={{width: 112, height: 132, objectFit: 'cover'}}></Image>
        <Text style={{marginTop: 15, fontSize: 15, fontWeight: 400}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#C4C4C4'}}>
        <Text style={{fontSize: 18, fontWeight: 400, marginTop: '10px', marginBottom: 10, marginLeft: '18px'}}>Chọn một màu bên dưới:</Text>
        <View style={{alignItems: 'center', justifyContent: 'center', gap: 15}}>
          <Text style={[styles.box, {backgroundColor: '#C5F1FB'}]} onPress={() => setImage('phone_silver')}></Text>
          <Text style={[styles.box, {backgroundColor: '#F30D0D'}]} onPress={() => setImage('phone_red')}></Text>
          <Text style={[styles.box, {backgroundColor: '#000'}]} onPress={() => setImage('phone_black')}></Text>
          <Text style={[styles.box, {backgroundColor: '#234896'}]} onPress={() => setImage('phone_blue')}></Text>
        </View>
        <Button title='Xong' style={styles.button} onPress={() => navigation.navigate("Screen01", {
          image: image
        })}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: {
    width: 85, height: 80
  },
  button: {
    marginTop: '35px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    width: 326,
    height: 44,
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
  }
})