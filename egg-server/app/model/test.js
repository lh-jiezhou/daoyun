/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('test', {
		test_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		test_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'test'
	});
};
