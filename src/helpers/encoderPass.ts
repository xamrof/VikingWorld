import bcrypt from 'bcrypt'

export const encodePassword = (password: string, salt: number = 10) => {
    password = bcrypt.hashSync(password, salt)
    return password
}

export const decodePassword = (password: string, hashPassword: string) => {
    const validPassword = bcrypt.compareSync(password, hashPassword)
    return validPassword
}