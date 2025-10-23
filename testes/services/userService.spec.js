const userService = require('../../src/services/userService');

// Mock da dependência externa
jest.mock('../../src/utils/logger', () => ({
  info: jest.fn(),
}));

const logger = require('../../src/utils/logger');

describe('userService', () => {
  let user;

  beforeEach(() => {
    user = { firstName: 'Leandro', lastName: 'Carvalho' };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('deve retornar o nome completo do usuário', () => {
    const fullName = userService.getFullName(user);
    expect(fullName).toBe('Leandro Carvalho');
  });

  test('deve chamar o logger com o nome completo', () => {
    userService.getFullName(user);
    expect(logger.info).toHaveBeenCalledWith('Generated full name: Leandro Carvalho');
  });
});
