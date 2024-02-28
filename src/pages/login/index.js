import { StyleSheet, Text, View } from 'react-native'
import LoginView from '../../komponents/login/login.js'
import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Membuat objek payload untuk dikirimkan ke server
    // const data = {
    //   email: email,
    //   pass: password,
    // };
    // console.log(data)


    const dataToSend = new URLSearchParams();
    dataToSend.append('email', email);
    dataToSend.append('pass', password);


     // URL endpoint API login
     const apiUrl = 'https://jernsync.my.id/pinjamanApp/login';  // Ganti dengan URL API login Anda
    //  const apiUrl = 'http://127.0.0.1:5000/login'; 

     // Menggunakan fetch untuk melakukan POST ke API
     fetch(apiUrl, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: dataToSend.toString(),
     })
       .then(response => response.json())
       .then(responseData => {
         // Handle respons dari server
         console.log('Response:', responseData);
 
         // Lakukan navigasi ke halaman berikutnya jika login berhasil
         if (responseData.success) 
         {alert('success');
        } else {
          alert('Login failed. Check your email and password.');
        }
       })
       .catch(error => {
         console.error('Error:', error);
       });
   
      };
   return <LoginView email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />;
 };
export default Login

const styles = StyleSheet.create({})