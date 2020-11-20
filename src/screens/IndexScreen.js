import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {Context} from '../context/BlogContext'


const IndexScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate("Create")}>
                <AntDesign style={styles.headerIcon} name="plus"/>
            </TouchableOpacity>
        ),
        });
    }, [navigation]);
    
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context)

    useEffect(()=> {
        getBlogPosts();
        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        })

        return () => {
            listener.removeEventListener()
        }
    }, [])

    return (
        <View>
            {/* <Button title="Add Post"
            onPress={addBlogPost}/> */}
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item})=> {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <AntDesign style={styles.icon} name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,

    },
    icon: {
        fontSize: 24
    },
    headerIcon: {
        marginRight: 10,
        fontSize: 30,
        color: 'black'
    }
})

export default IndexScreen