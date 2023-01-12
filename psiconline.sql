-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 12-Jan-2023 às 11:18
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
-- Banco de dados: `psiconline`
--

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
  `AVALIACAO_DS` varchar(3000) DEFAULT NULL,
  `NOME` varchar(300) NOT NULL,
  `CONTATO` varchar(25) NOT NULL,
  `EMAIL` varchar(150) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `duvida`
--

DROP TABLE IF EXISTS `duvida`;
CREATE TABLE IF NOT EXISTS `duvida` (
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
