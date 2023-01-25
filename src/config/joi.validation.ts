import * as Joi from 'joi';

// Hace obligatorias las variables de entorno
export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(5000),
  DEFAULT_LIMIT: Joi.number().default(10),
});
