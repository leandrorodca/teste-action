const logger = require('../utils/logger');

function getFullName(user) {
  const fullName = `${user.firstName} ${user.lastName}`;
  logger.info(`Generated full name: ${fullName}`);
  return fullName;
}

module.exports = { getFullName };