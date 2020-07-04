import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {getPosts} from '../services/http';
import PostItem from './PostItem';
import { Actions } from 'react-native-router-flux';

class MainPage extends React.Component {
    state = {
        postsLists: [],
        currentPage: 0
    }

    timer = null;

    getPosts = async () => {
        const res = await getPosts(this.state.currentPage);
        console.log(res);
        this.setState({
            postsLists: res.hits
        });
    }

    componentDidMount() {
        this.getPosts();
        this.updatePosts();
    }

    loadPosts = async () => {
        const nextPage = this.state.currentPage + 1;
        const res = await getPosts(nextPage);
        this.setState({
            postsLists: [...this.state.postsLists, ...res.hits],
            currentPage: nextPage
        });
    }

    updatePosts = () => {
        this.timer = setInterval(this.loadPosts, 10000);
    }

    clickItem = (post) => () => {
        Actions.push('postpage', {postData: post});
    }

    render() {
        console.log(this.state.postsLists);
        return (
            <View>
                <FlatList
                    data={this.state.postsLists}
                    extraData={this.state.postsLists}
                    renderItem={({ item }) => <PostItem title={item.title} author={item.author} url={item.url} createdAt={item.created_at} clickItem={this.clickItem(item)}/>}
                    keyExtractor={(item, index) => item.objectID+index}
                    onEndReached={this.loadPosts}
                    onEndReachedThreshold={0.9}
                />
            </View>
        )
    }
}

export default MainPage;