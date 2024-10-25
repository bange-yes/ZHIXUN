import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="我要找人"
        onPress={() => navigation.navigate('Post', { type: 'findPerson' })}
      />
      <Button
        title="我要寻物"
        onPress={() => navigation.navigate('Post', { type: 'findObject' })}
      />
      {/* 其他主页面内容 */}
    </View>
  );
}

export default HomeScreen;
