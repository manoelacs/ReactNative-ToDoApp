import React from 'react';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';

const Main = () => {

    const [todos, setTodos] = useState([
        {text: 'buy coffee', key: '1'},
        {text: 'create an app', key: '2'},
        {text: 'play on the switch', key: '3'},
      ]);
    
    const handlePress = (key) => {
        setTodos( (prevTodos) => { 
            return prevTodos.filter(todo => todo.key !== key)
        })
    }
    const handleSubmit = (text) => {
        let lastKey = todos[-1].key;
        setTodos((prevTodos) => { 
            return [...prevTodos, { text: text, key: (lastKey + 1).toString() }] 
        })
    }      
    
      return (
        <View style={styles.container}>

          <Header/> 

          <View style={styles.content}>

            <AddTodo handleSubmit ={ handleSubmit }/>

            <View style={styles.list}>
                <FlatList
                    data={ todos }
                    renderItem={ ({ item }) => (
                        <TodoItem item={item} handlePress={handlePress}/>
                    )}
                />
            </View>

          </View>

        </View>
      );  

}; export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content:{
      padding:40,
    },
    list:{
      marginTop: 20,
    }
});