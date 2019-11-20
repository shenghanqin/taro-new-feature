import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '@tarojs/async-await'
import './index.styl'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () {
    this.getLoginInfo()
  }

  getLoginInfo = async () => {
    const settings = await Taro.getSetting()
    console.log('settings :', settings)
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
