import React from 'react';
import logo from './logo.svg';
import './App.css';

import InputTextField from './components/InputTextField';
import CustomButton from './components/customButton';
import InputSelectField from './components/InputSelectField';
import naver_logo from './assets/naver_logo.png';
import lock from './assets/lock.png'

const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const gender = ["여자", "남자"];
const countryList = ['대한민국', '일본', '미국', '중국'];

function App() {
  return (
    <div className="App">
      <div><img src={naver_logo} alt="naver_logo" width={220} /></div>
      <div className = "main">
        <InputTextField label="아이디" rightElement={<p>@naver.com</p>}/>
        <InputTextField label="비밀번호" rightElement={<img src={lock} width={10}/>}/>
        <InputTextField label="비밀번호 재확인" rightElement={<img src={lock} width={10}/>}/>
        <InputTextField label="이름"/>
        <div className='birth'>
          <InputTextField label="생년월일"/>
          <InputSelectField data={month} name="month" id="month-select"/>
          <InputTextField placeholder="생일"/>
        </div>
        <InputSelectField label="성별" data={gender} name="gender" id="gender-select"/>
        <InputTextField label="본인 확인 이메일"/>
        <InputSelectField label="전화번호인증" data={countryList} name="countryList" id="countryList-select"/>
        <div className='phonenumber'>
          <InputTextField placeholder="전화번호 확인"/>
          <CustomButton details="인증하기"/>
        </div>
        <InputTextField placeholder="인증번호"/>  
        <CustomButton details="회원가입"/>
      </div>
    </div>
  );
}

export default App;
