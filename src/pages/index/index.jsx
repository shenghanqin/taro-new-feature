import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import TaroCanvasDrawer from 'taro-plugin-canvas'
import {
  TaroCropper
} from 'taro-cropper';
import './index.styl'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      canvasConfig: {
        width: 300,
        height: 300
      },
      cutImagePath: ''
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.getLoginInfo()
    Taro.setStorageSync('abc', 123)
    console.log('Taro :', Taro);
  }

  getLoginInfo = async () => {
    const settings = await Taro.getSetting()
    console.log('settings :', settings)
  }

  onCreateSuccess = (e) => {
    console.log('onCreateSuccess e :', e);
  }
  onCreateFail = (e) => {
    console.log('onCreateFail e :', e);
  }

  onCut = res => {
    this.setState({
      cutImagePath: res
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!{this.state.cutImagePath}</Text>
        <TaroCropper
          fullScreen
          onCut={this.onCut}
        />
        {/* <TaroCanvasDrawer
          config={this.state.canvasConfig}
          onCreateSuccess={this.onCreateSuccess}
          onCreateFail={this.onCreateFail}
        /> */}
      </View>
    )
  }
}
