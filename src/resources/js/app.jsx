/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// import './components/Example';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Index from './index/Index';

if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));
    // const element = document.getElementById('react');
    // console.log(element)
    // //data-bladeを持つ要素を取得
    // const data = element.getAttribute('data-blade');
    // console.log(data)
    // // dataの中身をJSONに変換
    // const json = JSON.parse(data);
    // console.log(json,'json')
    // // jsonのnameを取得
    // const name = json.name;
    // console.log(json[0].name,'name')
    // //data-bladeを持つ要素を削除
    element.removeAttribute('data-blade');
    root.render(<Index />);
}



