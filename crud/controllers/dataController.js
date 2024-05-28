// const User = require('../models/user');

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword });
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password } = req.body;

//   try {
//     const user = await User.findByPk(id);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;
//     user.name = name;
//     user.email = email;
//     user.password = hashedPassword;
//     await user.save();

//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findByPk(id);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     await user.destroy();
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


const Data = require('../models/Data');

exports.createData = async (req, res) => {
  const { name, value } = req.body;

  try {
    const newData = await Data.create({ name, value });
    res.status(201).json({ message: 'Data created successfully', data: newData });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await Data.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateData = async (req, res) => {
  const { id } = req.params;
  const { name, value } = req.body;

  try {
    const data = await Data.findByPk(id);

    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    data.name = name;
    data.value = value;
    await data.save();

    res.status(200).json({ message: 'Data updated successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Data.findByPk(id);

    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    await data.destroy();
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
