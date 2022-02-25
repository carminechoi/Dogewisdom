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
            let status = result.status === "success" ? 200 : 400;
            return res.status(status).json({ status: result.status, message: result.message, token: result.token });
        } catch (e) {
            console.log(e)
            return res.status(500).json({ status: 500 , message: e });
        }
    }
}

export { UserController };