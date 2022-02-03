import { UserService } from "../services/user.service";

class UserController {
    static postLogin = async function (req, res, next) {
        try {
            let result = await UserService.postLogin(req);
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static postRegister = async function (req, res, next) {
        try {
            let result = await UserService.postRegister(req);
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }
}

export { UserController };