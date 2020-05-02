import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCardFlip from "./flixCard";
// @ts-ignore
import styled from 'styled-components'
import Example from "./Card";
function App() {
    const styles = {
        card: {
            border: '1px solid #eeeeee',
            borderRadius: '3px',
            padding: '15px',
            width: '250px'
        },
        image: {
            height: '200px',
            width: '250px'
        }
    };
  return (
      <section className="example-section">
          <h3>Slower card flip</h3>

          <Example styles={styles} />
      </section>
  );
}
export default App;
