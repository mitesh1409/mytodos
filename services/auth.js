import jwt from 'jsonwebtoken';

function setJwt(user) {
    const payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    };

    return jwt.sign(payload, process.env.JWT_SECRET || 'secret2025');
}

function getUser(jwtToken) {
    if (!jwtToken) {
        return null;
    }

    try {
        return jwt.verify(jwtToken, process.env.JWT_SECRET || 'secret2025');
    } catch (error) {
        console.error('Error while verifying JWT token');
        console.error(error);
    }
}

export {
    setJwt,
    getUser
};
