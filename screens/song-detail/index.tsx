import React from 'react';
import {
    Image, Text,
    View
} from 'react-native';
import {SongDetail} from "../Type";



const SongDetailScreen:React.FC<SongDetail> = (prop:SongDetail) => {

    console.log("clicled 3")

    return (
        <View style={{justifyContent:"center", alignItems:"center",width:"100%", height:"100%"}}>
    <Image
        resizeMode={'contain'}
    style={{width:200, height:200}}
    source={{uri:prop.artworkUrl100}}/>
    <Text>{prop.trackName}</Text>
    <Text>{prop.collectionName}</Text>
    <Text>{prop.artistName}</Text>
    </View>
);
};


export default SongDetailScreen;
