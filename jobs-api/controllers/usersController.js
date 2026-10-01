import users from "../ data / users.js"

export function Register() {
    const id = Date.now();
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    if (id && name && email && password && role) {

        users.push({ id, name, email, password, role })
        res.status(201).json({ message: "User created successfully" })
    } else {
        res.status(400).json({ message: "Incomplete information" })
    }
}

export function Login() {
    const user = users.find((u) => u.id == req.params.id)
    if (user) {
        if (user.password == req.body.password && user.email == req.body.email && user.name == req.body.name) {
            return res.status(200).json({ message: "Login successful" })
        } else {
            return res.status(400).json({ message: "Invalid username or password" })
        }
    } else {
        return res.status(404).json({ message: "User not found, please register" })
    }
}