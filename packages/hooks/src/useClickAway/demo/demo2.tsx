/**
 * title: Custom DOM
 * desc: Support pass in a DOM element directly or a function that returns the DOM element.
 *
 * title.zh-CN: 自定义 DOM
 * desc.zh-CN: 支持直接传入 DOM 对象或通过 function 返回一个对象的方式引入。
 */

import React, { useState } from 'react';
import { Button } from 'antd';
import {useClickAway} from '@umijs/hooks';

export default () => {
  const [counter, setCounter] = useState(0);

  useClickAway(
    () => {
      setCounter(s => s + 1);
    },
    () => document.getElementById('box2'),
  );

  return (
    <div>
      <Button type="primary" id="box2">
        box2
      </Button>
      <p>counter: {counter}</p>
    </div>
  );
};
