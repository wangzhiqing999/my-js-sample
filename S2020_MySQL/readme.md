# 测试 js 访问 MySQL.


### MySQL 数据库操作.



-- 创建测试表.
CREATE TABLE test (
  id   INT  AUTO_INCREMENT,
  value  VARCHAR(16),
  PRIMARY KEY (id)
);
CREATE TABLE test_log (
  id   INT  AUTO_INCREMENT,
  data  VARCHAR(512),
  PRIMARY KEY (id)
);


-- 测试数据.
INSERT INTO test(value) VALUES ('Hello');
INSERT INTO test(value) VALUES ('World');





-- 测试用户.
CREATE USER 'test'@'localhost' IDENTIFIED BY '123456';

-- 测试表 对 测试用户的授权.
GRANT ALL ON test TO 'test'@'localhost';
GRANT ALL ON test_log TO 'test'@'localhost';



### 安装
	npm install mysql --save


### 运行.

	简单查询表的全部数据 （无 where 条件）
	npm run selectAll

	简单查询表的指定行数据 （有 where 条件）
	npm run selectOne

	简单插入数据.
	npm run insert

	简单更新数据.
	npm run update

	简单事务处理.
	npm run transactions