import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { io } from "socket.io-client";

export default function MessageScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // Connect to the server
  useEffect(() => {
    const server = io('http://127.0.0.1:8081'); // Replace with your server's IP and port

    server.on('server_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, { id: Date.now().toString(), text: message }]);
    });

    server.emit('msg', 'Socket.io-client connected');
   

    return () => {
      server.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      const server = io('http://127.0.0.1:8081'); // Replace with your server's IP and port
      server.emit('msg', inputText);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#167E72',
    borderRadius: 80,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#167E72',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#167E72',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#167E72',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


// practice
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// const MessageScreen = () => {
//   const [messages, setMessages] = useState([
//     // { id: '1', text: 'Hello!' },
//     // { id: '2', text: 'Hi, how are you?' },
//   ]);
//   const [inputText, setInputText] = useState('');

//   const sendMessage = () => {
//     if (inputText.trim().length > 0) {
//       setMessages([...messages, { id: Date.now().toString(), text: inputText }]);
//       setInputText('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.messageContainer}>
//             <Text style={styles.messageText}>{item.text}</Text>
//           </View>
//         )}
//         style={styles.messageList}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message"
//           value={inputText}
//           onChangeText={setInputText}
//         />
//         <TouchableOpacity style={styles.button} onPress={sendMessage}>
//           <Text style={styles.buttonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   messageList: {
// //     flex: 1,
// //     padding: 10,
// //   },
// //   messageContainer: {
// //     marginBottom: 10,
// //     padding: 10,
// //     backgroundColor: '#f1f1f1',
// //     borderRadius: 5,
// //   },
// //   messageText: {
// //     fontSize: 16,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     borderTopWidth: 1,
// //     borderColor: '#ccc',
// //   },
// //   input: {
// //     flex: 1,
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     paddingHorizontal: 10,
// //   },
// //   button: {
// //     marginLeft: 10,
// //     backgroundColor: '#007BFF',
// //     borderRadius: 5,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 15,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// // });

// export default MessageScreen;
