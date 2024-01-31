const UserService = require("../../src/service/user-service");
const UserRepository = require("../../src/repository/user-repo");


jest.mock("../../src/repository/user-repo");

describe('user service singup testing', () => {
    test('Should successfull create a user', async () => {
        const data = {
            email : "vivek12@gmail.com",
            password : "1234556"
        };
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt: '2022-12-12', updatedAt: '2022-12-12'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    })
})