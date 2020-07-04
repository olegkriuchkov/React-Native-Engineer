import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import OpenURLButton from './OpenURLButton';


class PostItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.view} onPress={this.props.clickItem}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text>Author: {this.props.author}</Text>
                <OpenURLButton url={this.props.url}><Text style={styles.linkText}>{this.props.url}</Text></OpenURLButton>
                <Text>Created at {new Date(this.props.createdAt).toLocaleString()}</Text>
            </TouchableOpacity>
        )
    }
}

export default PostItem;

const styles = StyleSheet.create({
    view: {
        borderWidth: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    text: {
        fontSize: 15
    },
    link: {
        backgroundColor: "white",
        borderWidth: 0,
    },
    linkText: {
        color: "blue"
    }
});