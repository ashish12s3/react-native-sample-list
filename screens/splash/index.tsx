import React from 'react';
import {
    Image,
    View
} from 'react-native';


const Splash = () => {
    return (
        <View style={{justifyContent:"center", alignItems:"center",width:"100%", height:"100%"}}>
            <Image
                resizeMode={'contain'}
                style={{width:'100%', height:'100%'}}
                source={require('../../img.png')}/>
        </View>
    );
};


export default Splash;
