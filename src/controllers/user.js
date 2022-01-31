import User from "../models/User";

export async function createUser(req, res) {
  const user = new User(req.body);
  try {
    await user.save();

    res.status(201).send({});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
