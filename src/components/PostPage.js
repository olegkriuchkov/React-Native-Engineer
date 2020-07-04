import React from 'react';
import {View, Text} from 'react-native';

class PostPage extends React.Component {
    render() {
        console.log(this.props.navigation);
        return (
            <View>
                <Text>{JSON.stringify(this.props.navigation.state.params.postData)}</Text>
            </View>
        )
    }
}

export default PostPage;