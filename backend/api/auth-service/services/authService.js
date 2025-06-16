import prisma from '../../prisma/prismaClient.js';
import bcrypt from 'bcryptjs';
import createError from 'http-errors';
import jwt from "jsonwebtoken";

export class AuthService {
  async createUser({ email, fullName, password }) {
    if (!email || !fullName || !password ) {
      throw createError(400, "Parâmetros inválidos. Todos os campos são obrigatórios")
    }
    try {
        const existingUser = await prisma.usuario.findUnique({
                where: { user_email: email },
              });
            
        if (existingUser) {
              throw createError(400, "email já cadastrado")
            }
    }

    catch (error) {throw createError(500, error)}
    
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.usuario.create({
      data: {
        user_email: email,
        full_name: fullName,
        hashed_password: hashedPassword,
      },
    });
  }

  async login({email, password}) {
    const user = await prisma.usuario.findUnique({ where: { user_email: email } });

    if (!user || !(await bcrypt.compare(password, user.hashed_password))) {
      throw createError(401, "Credenciais inválidas")
    }

    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  }
}
