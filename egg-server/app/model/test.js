/* jshint indent: 1 */

module.exports = app => {
	const { STRING, INTEGER } = app.Sequelize; 
	const Test = app.model.define('test', {
		test_id: {
			type: INTEGER,
			allowNull: false,
			primaryKey: true
		},
		test_name: {
			type: STRING,
			allowNull: true
		}
	})
	return Test;
};
