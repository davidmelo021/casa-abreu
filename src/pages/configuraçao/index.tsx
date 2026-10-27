import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import {
  Container, Title, Section, SectionTitle,
  Input, Label, Button
} from '../perfil/styles';

export default function Configuraçao() {
    const {token} = useAuth();
    const {darkMode,toggleDarkMode} = useTheme();
    const navigate = useNavigate();
}