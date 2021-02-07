/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    BackHandler,
    SafeAreaView, Text,
} from 'react-native';
import Splash from './screens/splash/index'
import SongList from './screens/song-list/index'
import {SongDetail} from "./screens/Type";
import SongDetailScreen from "./screens/song-detail/index"
interface AppProp {
    song:SongDetail
}

interface AppState {
  screen:Screen
  songDetail?:SongDetail
}

enum Screen{
  SPLASH,
  LIST,
  DETAIL
}

class App extends React.Component<AppProp,AppState> {

  constructor(prop:AppProp){
    super(prop)
    this.state = {screen:Screen.SPLASH}
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

  }



  componentDidMount(){
      setTimeout(()=>{
          this.setState({screen:Screen.LIST})
      },1000)
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

  }

  componentWillUnmount(){
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

    handleBackButtonClick() {
        if(this.state.screen == Screen.DETAIL){
            this.setState({screen:Screen.LIST})
            return true;
        }else{
            return false
        }
    }

  render(){
     switch (this.state.screen){
         case Screen.SPLASH: {
         return (<SafeAreaView>
            <Splash/>
         </SafeAreaView>)
       }
         case Screen.LIST:{
             return (<SafeAreaView>
                <SongList clickCallback={(song:SongDetail)=>{
                    this.setState({screen:Screen.DETAIL,songDetail:song})
                }}/>
             </SafeAreaView>)
       }
         case Screen.DETAIL: {
             let song = this.state.songDetail
             return (<SafeAreaView>
                 <SongDetailScreen
                    artworkUrl100={song?.artworkUrl100 }
                    trackId={song?.trackId }
                    trackName={song?.trackName }
                    collectionName={song?.collectionName }
                    artistName={song?.artistName }

                 />

             </SafeAreaView>)
       }
     }
  }
}


export default App;
