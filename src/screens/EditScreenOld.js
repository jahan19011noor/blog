import React, { useState, useContext } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({route}) => {

    const { state } = useContext(Context)

    const blogPost = state.find(blogPost => 
        blogPost.id === route.params.id
    )

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return (
        <View>
            <Text style={styles.label}>Edit Title: </Text>
            <TextInput 
                style={styles.input} 
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}
            />
            <Text style={styles.label}>Edit Content: </Text>
            <TextInput 
                style={styles.input} 
                value={content}
                onChangeText={(newContent) => setContent(newContent)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    },
    headerIcon: {
        marginRight: 10,
        fontSize: 20,
        color: 'black'
    }
})

export default EditScreen;