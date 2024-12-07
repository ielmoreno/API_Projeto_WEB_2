/*
Navicat MySQL Data Transfer

Source Server         : sistema
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : projetoweb2

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2024-12-07 20:37:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `consulta`
-- ----------------------------
DROP TABLE IF EXISTS `consulta`;
CREATE TABLE `consulta` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `paciente_id` int(10) unsigned NOT NULL,
  `doctor_id` int(10) unsigned NOT NULL,
  `data_consulta` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `consulta_FKIndex1` (`doctor_id`),
  KEY `consulta_FKIndex2` (`paciente_id`),
  CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `consulta_ibfk_2` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of consulta
-- ----------------------------
INSERT INTO `consulta` VALUES ('1', '1', '1', '2024-12-13 13:30:00');

-- ----------------------------
-- Table structure for `doctor`
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `sexo` int(10) unsigned NOT NULL,
  `endereco` varchar(250) NOT NULL,
  `data_nascimento` datetime NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `crm` varchar(11) NOT NULL,
  `uf` char(2) NOT NULL,
  `especialidade_1` varchar(250) DEFAULT NULL,
  `especialidade_2` varchar(250) DEFAULT NULL,
  `cpf` varchar(14) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `doctor_crm_key` (`crm`),
  UNIQUE KEY `doctor_cpf_key` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES ('1', 'Gabriel Moreno Medeiros', '0', 'Rua teste, 223, bairro teste, caraguatatuba', '2024-12-04 00:00:00', '', '252542-SP', 'SP', 'Cardiologista', 'Ortopedista', '555.333.222-55', '(12)99999-2222');
INSERT INTO `doctor` VALUES ('2', 'Sergio mano doido', '0', 'Rua teste, 223, bairro teste, caraguatatuba', '2024-12-04 00:00:00', '', '252543-SP', 'SP', 'Otorrinolaringologista', 'Cardiologista', '852.845.945-66', '(12)91010-1010');

-- ----------------------------
-- Table structure for `paciente`
-- ----------------------------
DROP TABLE IF EXISTS `paciente`;
CREATE TABLE `paciente` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `sexo` int(10) unsigned NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `endereco` varchar(250) DEFAULT NULL,
  `data_nascimento` datetime NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `paciente_cpf_key` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of paciente
-- ----------------------------
INSERT INTO `paciente` VALUES ('1', 'Sergio mano doido', '0', '852.845.945-66', 'Rua teste, 223, bairro teste, caraguatatuba', '2024-12-04 00:00:00', '(12)97410-1010', '');
