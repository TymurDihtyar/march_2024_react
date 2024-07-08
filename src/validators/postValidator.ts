import * as Joi from 'joi';

const postValidator = Joi.object({
  title: Joi.string()
    .pattern(/^[a-zA-Z]\w{1,30}$/)
    .required()
    .messages({
      'string.pattern.base': 'First letter, then letters digits min 2-30',
    }),
  body: Joi.string()
    .pattern(/^[a-zA-Z]\w{1,99}$/)
    .required()
    .messages({
      'string.pattern.base': 'First letter, then letters digits min 2-99',
    }),
});

export { postValidator };
