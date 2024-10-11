// import React, { useState, useEffect } from "react";
// import * as GoogleGenerativeAI from "@google/generative-ai";
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   ActivityIndicator,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { Entypo } from "@expo/vector-icons";
// import LottieView from "lottie-react-native";  // Import LottieView
// import FlashMessage, { showMessage } from "react-native-flash-message";

// const HomeScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showStopIcon, setShowStopIcon] = useState(false);

//   const API_KEY = "AIzaSyCXz23q_aHxvpMLOH5HA3VioQVpxof2hrI";

//   useEffect(() => {
//     const startChat = async () => {
//       const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const prompt = "hello! ";
//       const result = await model.generateContent(prompt);
//       const response = result.response;
//       const text = response.text();
//       console.log(text);
//       showMessage({
//         message: "Welcome to Gemini Chat 🤖",
//         description: text,
//         type: "info",
//         icon: "info",
//         duration: 2000,
//       });
//       setMessages([
//         {
//           text,
//           user: false,
//         },
//       ]);
//     };
//     startChat();
//   }, []);

//   const sendMessage = async () => {
//     setLoading(true);
//     const userMessage = { text: userInput, user: true };
//     setMessages([...messages, userMessage]);

//     const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const prompt = userMessage.text;
//     const result = await model.generateContent(prompt);
//     const response = result.response;
//     const text = response.text();
//     setMessages([...messages, { text, user: false }]);
//     setLoading(false);
//     setUserInput("");
//   };

//   const ClearMessage = () => {
//     setMessages([]);
//   };

//   const renderMessage = ({ item }) => (
//     <View
//       className={`p-3 my-2 rounded-lg ${item.user ? "bg-blue-100" : "bg-gray-100"}`}
//     >
//       <Text className={`text-base ${item.user ? "text-blue-800" : "text-gray-800"}`}>
//         {item.text}
//       </Text>
//     </View>
//   );

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0} 
//     >
//       <View className="flex-1 bg-white">
  
//         <View className="flex-1 justify-center items-center mt-20">
//           <LottieView
//             source={require("../../assets/illustrations/chatbot-2.json")} 
//             autoPlay
//             loop
//             style={{ width: 400, height: 300 }}
//           />
//         </View>

        
//         <FlatList
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={(item, index) => index.toString()}
//           inverted
//           className="flex-1 px-4"
//         />

        
//         <View className="flex-row items-center p-4 border-t border-gray-300 bg-white shadow-md">
//           <TextInput
//             placeholder="Type a message"
//             onChangeText={setUserInput}
//             value={userInput}
//             onSubmitEditing={sendMessage}
//             className="flex-1 p-3 bg-gray-200 rounded-lg text-gray-800"
//             placeholderTextColor="#888"
//           />
//           {showStopIcon && (
//             <TouchableOpacity
//               className="p-2 bg-gray-800 rounded-full ml-2"
//               onPress={ClearMessage}
//             >
//               <Entypo name="controller-stop" size={24} color="white" />
//             </TouchableOpacity>
//           )}
//           {loading && <ActivityIndicator size="large" color="black" />}
//         </View>
//         <FlashMessage position="top" />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default HomeScreen;
