'use strict'

// 手写
// module.exports = app => {
//     const { STRING, INTEGER } = app.Sequelize; //获取 sequelize对应的数据类型映射

//     const User = app.model.define('user', {
//         user_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
//         user_name: STRING,
//         user_password: STRING,
//     });

//     return User;
// }

// sequelize-auto自动生成
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		user_password: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'user',
		timestamps: false
	});
};
