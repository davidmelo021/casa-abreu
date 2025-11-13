import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f7f7f7, #e0e0e0);
  font-family: "Poppins", sans-serif;
`;

export const Box = styled.div`
  background-color: #ffffff;
  padding: 2.5rem 3rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 360px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.h1`
  color: #ff6600;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  color: #333;
  margin-bottom: 0.3rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  transition: 0.3s;

  &:focus {
    border-color: #ff6600;
    box-shadow: 0 0 5px rgba(255, 102, 0, 0.4);
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e55c00;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  background-color: #fff;
  color: #555;
  border: 1px solid #ccc;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  &::before {
    content: "";
    background-image: url("https://www.svgrepo.com/show/475656/google-color.svg");
    background-size: cover;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`;