import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button  className="button" style={{ '--clr': '#7808d0' } as React.CSSProperties}>
        <span className="button__icon-wrapper">
          <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={8}>
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 14 15" fill="none" width={8} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
        </span>
        About Learnlogicify
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    line-height: 1;
    text-decoration: none;
    display: inline-flex;
    border: none;
    cursor: pointer;
    align-items: center;
    gap:10px;
    background-color: white;
    color: black;
    border-radius: 10rem;
    font-weight: 400;
    padding: 8px 30px;
    padding-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    transition: background-color 0.3s;
  }

  .button__icon-wrapper {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    color: white;
    background-color: black;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .button:hover {
    background-color: #000 white;
  }

  .button:hover .button__icon-wrapper {
    color: white;
  }

  .button__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover .button__icon-svg:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }
  @media (max-width: 674px) {
    .button {
      padding: 5px 15px;
      padding-left: 10px;
      font-size: 12px;
      gap:6px;
    }
    
  }
  .button:hover .button__icon-svg--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }
`;

export default Button;
