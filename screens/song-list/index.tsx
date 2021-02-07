import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {SongDetail} from "../Type";

interface SongListProp {
    clickCallback:(item:SongDetail)=>void
}

const SongList:React.FC<SongListProp> = (prop:SongListProp) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Array<SongDetail>>([]);
    const fetchData = () => {
        fetch('https://itunes.apple.com/search?term=Michael+jackson',{
            method: 'POST'})
            .then((response) => response.json())
            .then((json) => {setData(json.results);console.log(json.resultCount)})
            .catch((error) => console.error(error))
            .finally(() => {setLoading(false)});
    }
    useEffect(fetchData, []);

    return (
        <View style={Styles.container}>
    {isLoading ?
        (<ActivityIndicator
            animating={true}
            color={'red'}
            size={'large'}
            style={Styles.indicator}/> ): (
        <FlatList
            style={{backgroundColor:'red'}}
            contentContainerStyle={Styles.flatlist}
            data={data}
            keyExtractor={({ trackId }, index) => trackId+''+index}
            numColumns={2}
            onRefresh={fetchData}
            refreshing={isLoading}
            renderItem={({ item }) => (
                <TouchableOpacity style={{backgroundColor:'grey'}} onPress={()=>{
                    console.log("clicled 1")
                    prop.clickCallback(item)
                }}>
                    <View style={Styles.itemContainer}>
                        <Image style={Styles.image} source={{uri:item.artworkUrl100}}/>
                        <Text style={Styles.text} numberOfLines={2} >{item.trackName}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )}
    </View>
);
};

const Styles=StyleSheet.create({
    indicator:{

    },
    container:{
        alignItems:'center',
        padding: 15,
    },
    flatlist:{

    },
    itemContainer:{
        padding:5,

    },
    image:{
        width:150,
        height:150
    },
    text:{
        width:150
    }
})

export default SongList




