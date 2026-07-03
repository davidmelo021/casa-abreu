import {useState} from 'react';
import {useNavigation} from 'react-router-dom';
import {Container, Box, Title, Input, Label, Button} from '../../pages/login/styles';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmaPassword, setConfirmaPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigation = useNavigation();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');

        if(password !== confirmaPassword) {
            
        }
    }
