'use client';

import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';
// xtermJS 套件，讓 terminal 的尺寸適合元素大小
import { FitAddon } from 'xterm-addon-fit';

import 'xterm/css/xterm.css';

const FontSize = 14;
const Col = 80;

export default function WebTerminal({ ConnectionInfo }) {
  const webTerminal = useRef(null);
  const ws = useRef(null);

  useEffect(() => {
    const ele = document.getElementById('terminal');
    if (ele && !webTerminal.current) {
      const height = ele.clientHeight;
      // 初始化 Terminal
      const terminal = new Terminal({
        // 光標樣式
        // cursorStyle: "underline",
        //  光標閃爍
        cursorBlink: true,
        cols: Col,
        rows: Math.ceil(height / FontSize),
      });

      // 輔助套件
      const fitAddon = new FitAddon();
      terminal.loadAddon(new WebLinksAddon());
      terminal.loadAddon(fitAddon);

      terminal.open(ele);
      terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
      fitAddon.fit();
      webTerminal.current = terminal;
    }

    // 初始化 websocket 連接
    if (ws.current) ws.current.close();
    // 跟 websocket server 建立連接
    const socket = new WebSocket('ws://localhost:3001');
    socket.onopen = () => {
      socket.send('connect success');
      // socket.send(JSON.stringify({ msg: 'connect success' }));
      // socket.send(JSON.stringify(ConnectionInfo));
    };
    ws.current = socket;
  }, []);

  useEffect(() => {
    // 新增監聽
    const terminal = webTerminal.current;
    const socket = ws.current;

    if (terminal && socket) {
      // 監聽
      terminal.onKey((e) => {
        const { key } = e;
        socket.send(key);
      });

      // websocket 監聽
      socket.onmessage = (e) => {
        // console.log(e);

        if (typeof e.data === 'string') {
          terminal.write(e.data);
        } else {
          console.error('格式錯誤');
        }
      };
    }
    return () => {
      socket.close();
      // terminal.dispose();
    };
  }, []);

  return (
    <div
      id='terminal'
      style={{ backgroundColor: '#000', width: '100vw', height: '100vh' }}
    />
  );
}
