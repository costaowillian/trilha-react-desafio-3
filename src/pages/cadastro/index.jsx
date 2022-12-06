import React from 'react'
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Container, Column, Contatext, Text, Title, Subtitle, Logintext, Maintitle, Quadro, Row } from "./styles";
import { useForm } from "react-hook-form";

const Regis = () => { 
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
  return (<>
        <Header />
        <Container>
            <Maintitle>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Maintitle>
            <Quadro>
            <Title>Comece agora grátis</Title>
            <Subtitle>Crie sua conta e make the change._</Subtitle>
            
            <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="nome" control={control}/> 
            <Input placeholder="E-mail" leftIcon={<MdEmail />}  name="email" control={control}/>
            <Input placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control}/>
            <Button title="Criar minha conta" variant="secondary" />

                
           
            <Column>
                <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                <Row><Contatext>Já tenho conta</Contatext><Logintext href="/login">Fazer login</Logintext></Row>
                
            </Column> 
            </Quadro>
        </Container>
    </>
  )
}

export { Regis }