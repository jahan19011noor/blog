    import React, { useContext } from 'react'
    import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
    import { Context } from '../context/BlogContext'
    import { FontAwesome5 } from '@expo/vector-icons';

    const ShowScreen = ({route, navigation}) => {
        console.log(route.params.id)

        const { state } = useContext(Context)

        const blogPost = state.find(blogPost => 
            blogPost.id === route.params.id
        )

        React.useLayoutEffect(() => {
            navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id: blogPost.id})}>
                    <FontAwesome5 style={styles.headerIcon} name="pencil-alt" />
                </TouchableOpacity>
                ),
            });
        }, [navigation]);

        return (
            <View>
                <Text>{blogPost.title}</Text>
                <Text>{blogPost.content}</Text>
            </View>
        )
    }

    const styles = StyleSheet.create({
        headerIcon: {
            marginRight: 10,
            fontSize: 20,
            color: 'black'
        }
    })

    export default ShowScreen;