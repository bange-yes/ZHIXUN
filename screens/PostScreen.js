import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function PostScreen({ route }) {
  const { type } = route.params;

  return (
    <View>
      <TextInput placeholder="键入内容......" />
      <TouchableOpacity>
        <Text>插入图片</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>智能填充</Text>
      </TouchableOpacity>
      {/* 实现底部导航栏 */}
    </View>
  );
}

export default PostScreen;
