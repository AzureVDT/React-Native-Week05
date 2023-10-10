import { Image, StyleSheet, Text, View } from 'react-native'
import Star from '../components/Star'
import Help from '../components/Help'
import Button from '../components/Button'

export default function Screen01({route, navigation}) {
  return (
    <View style={styles.container}>
        <View>
        <Image source={require(`../assets/${route.params ? route.params?.image: 'phone_blue'}.png`)} style={{width: 300, height: 360, objectFit: 'cover'}}></Image>   
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', gap: 15}}>
            <Text style={{fontSize: 15, fontWeight: 400}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={{flexDirection: 'row', gap: 25}}>
                <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </View>
                <View>
                    <Text style={{fontSize: 15, fontWeight: 400}}>(Xem 828 đánh giá)</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 45, alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>1.790.000 đ</Text>
                <Text style={{fontSize: 15, fontWeight: 'bold', textDecorationLine: 'line-through'}}>1.790.000 đ</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                <Text style={{color: 'red', fontSize: 12, fontWeight: 'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Help></Help>    
            </View>
            <Button title="4 MÀU-CHỌN MÀU" style={styles.button} onPress={() => navigation.navigate("Screen02")}>
                <Text style={{position: 'absolute', top: '35%', right: '10px'}}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5L8.25 7L0 1.5L1 0L11.5 7L1 14L0 12.5Z" fill="black"/>
                </svg>
                </Text>
            </Button>
        </View>
        <Button title='CHON MUA' style={styles.btnMua}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    button: {
        width: "100%",
        height: "45px",
        background: 'rgba(196, 196, 196, 0.00)',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        border: '1px solid rgba(0, 0, 0, 0.46)',
        borderRadius: '10px'
    },
    btnMua: {
        backgroundColor: '#CA1536',
        width: '326px',
        border: '1px solid #CA1536',
        borderRadius: '10px',
        marginTop: '50px',
        height: '45px',
        marginBottom: '13px'
    }
})