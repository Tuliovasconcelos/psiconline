-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 11-Jan-2023 às 16:54
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gersenhas`
--
CREATE DATABASE IF NOT EXISTS `gersenhas` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gersenhas`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `senhas`
--

DROP TABLE IF EXISTS `senhas`;
CREATE TABLE IF NOT EXISTS `senhas` (
  `idSenha` int(11) NOT NULL AUTO_INCREMENT,
  `Local` varchar(50) NOT NULL,
  `Login` varchar(50) NOT NULL,
  `Senha` varchar(50) NOT NULL,
  `Data` date NOT NULL,
  PRIMARY KEY (`idSenha`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
--
-- Banco de dados: `psiconline`
--
CREATE DATABASE IF NOT EXISTS `psiconline` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `psiconline`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `abordagem`
--

DROP TABLE IF EXISTS `abordagem`;
CREATE TABLE IF NOT EXISTS `abordagem` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRICAO` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `abordagem_psicologo`
--

DROP TABLE IF EXISTS `abordagem_psicologo`;
CREATE TABLE IF NOT EXISTS `abordagem_psicologo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PSICOLOGO` int(11) DEFAULT NULL,
  `ID_ABORDAGEM` int(11) DEFAULT NULL,
  `ATIVO_SN` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_psicologo`
--

DROP TABLE IF EXISTS `avaliacao_psicologo`;
CREATE TABLE IF NOT EXISTS `avaliacao_psicologo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PSICOLOGO` int(11) DEFAULT NULL,
  `ID_PACIENTE` int(11) DEFAULT NULL,
  `AVALIACAO_DS` varchar(3000) DEFAULT NULL,
  `NOME` varchar(300) NOT NULL,
  `CONTATO` varchar(25) NOT NULL,
  `EMAIL` varchar(150) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `duvidas`
--

DROP TABLE IF EXISTS `duvidas`;
CREATE TABLE IF NOT EXISTS `duvidas` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRICAO` varchar(3000) DEFAULT NULL,
  `RESPOSTA` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `especialidade`
--

DROP TABLE IF EXISTS `especialidade`;
CREATE TABLE IF NOT EXISTS `especialidade` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRICAO` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `especialidade_psicologo`
--

DROP TABLE IF EXISTS `especialidade_psicologo`;
CREATE TABLE IF NOT EXISTS `especialidade_psicologo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PSICOLOGO` int(11) DEFAULT NULL,
  `ID_ESPECIALIDADE` int(11) DEFAULT NULL,
  `ATIVO_SN` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `psicologo`
--

DROP TABLE IF EXISTS `psicologo`;
CREATE TABLE IF NOT EXISTS `psicologo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(200) DEFAULT NULL,
  `EMAIL` varchar(200) DEFAULT NULL,
  `CONTATO` varchar(25) DEFAULT NULL,
  `SENHA` varchar(250) DEFAULT NULL,
  `CRP` varchar(100) DEFAULT NULL,
  `APROVADO_SN` varchar(1) DEFAULT NULL,
  `VALOR_CONSULTA` int(11) NOT NULL,
  `TOPICOS` varchar(3000) NOT NULL,
  `PUBLICO` varchar(3000) NOT NULL,
  `SOBRE` varchar(3000) NOT NULL,
  `CAMINHO_FOTO` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
